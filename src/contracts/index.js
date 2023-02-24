import { useCalls, useContractFunction, useEthers } from '@usedapp/core'
import { BigNumber, constants, Contract } from 'ethers'
import { useEffect, useMemo, useState } from 'react'
import ERC20 from './ERC20.json'
import OtterMine from './OtterMine.json'
import PFood from './PFood.json'

const addresses = {
  137: {
    PFOOD: '0x3d38B5a08A636F2D30F28384335b9d9b35ef69e2',
    CLAM: '0xC250e9987A032ACAC293d838726C511E6E1C029d',
    DAI: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    MINE: '0x3E7c386C439cD44F504634A6B86c81E5aC41bE4C',
  },
  80001: {
    PFOOD: '0x0d90f283585569e6c284171f6646f37B43522D80',
    CLAM: '0x08a83ee393ac296326196a8f2dacbed91cd84762',
    DAI: '0x19907af68A173080c3e05bb53932B0ED541f6d20',
    MINE: '0xD3d44995BB838D94080696ac8a55e014086446d9',
  },
}

export const useAddresses = () => {
  const { chainId } = useEthers()
  return useMemo(() => addresses[chainId], [chainId])
}

const usePFood = () => {
  const addresses = useAddresses()
  return useMemo(() => addresses && new Contract(addresses.PFOOD, PFood), [addresses])
}

const useERC20 = (address) => {
  const { library } = useEthers()
  return useMemo(() => address && new Contract(address, ERC20, library?.getSigner()), [address, library])
}

export const usePFoodInfo = () => {
  const contract = usePFood()
  const results = useCalls([
    contract && {
      contract,
      method: 'pFoodPerUsd',
    },
    contract && {
      contract,
      method: 'capPerAccount',
    },
    contract && {
      contract,
      method: 'whitelistStageStartTime',
    },
    contract && {
      contract,
      method: 'publicStageStartTime',
    },
    contract && {
      contract,
      method: 'totalSupply',
    },
    contract && {
      contract,
      method: 'cap',
    },
  ])
  return {
    pFoodPerUsd: results?.[0]?.value?.[0] || constants.Zero,
    capPerAccount: results?.[1]?.value?.[0] || constants.Zero,
    whitelistStageStartTime: new Date(results?.[2]?.value?.[0]?.mul(1000).toNumber() || 0),
    publicStageStartTime: new Date(results?.[3]?.value?.[0].mul(1000).toNumber() || 0),
    totalSupply: results?.[4]?.value?.[0] || constants.Zero,
    cap: results?.[5]?.value?.[0] || BigNumber.from('1'),
  }
}

export const usePFoodFromClam = (clamAmount) => {
  const addresses = useAddresses()
  const contract = usePFood()
  const mine = addresses && new Contract(addresses.MINE, OtterMine)
  const results = useCalls([
    mine && {
      contract: mine,
      method: 'usdPerClam',
    },
    contract && {
      contract,
      method: 'calcReceivedAmount',
      args: [addresses.CLAM, clamAmount],
    },
  ])
  return {
    usdPerClam: results?.[0]?.value?.[0],
    pFoodAmount: results?.[1]?.value?.[0],
  }
}

export const usePFoodFromDai = (daiAmount) => {
  const addresses = useAddresses()
  const contract = usePFood()
  const results = useCalls([
    contract && {
      contract,
      method: 'calcReceivedAmount',
      args: [addresses.DAI, daiAmount],
    },
  ])
  return {
    pFoodAmount: results?.[0]?.value?.[0]?.div(BigNumber.from(10).pow(6)),
  }
}

export const useMint = () => {
  const { account } = useEthers()
  const addresses = useAddresses()
  const dai = useERC20(addresses?.DAI)
  const contract = usePFood()
  const { send, state, resetState } = useContractFunction(contract, 'mint')
  const [mintState, setMintState] = useState({
    state,
    status: state.status,
  })
  const mint = async (amount) => {
    setMintState({
      state,
      status: 'Mining',
    })
    try {
      const allowance = await dai.allowance(account, addresses.PFOOD)
      if (allowance.lt(amount)) {
        await (await dai.approve(addresses.PFOOD, amount)).wait()
      }
      send(amount)
    } catch (e) {
      setMintState({
        state: {
          ...state,
          errorMessage: e.message,
        },
        status: 'Exception',
      })
    }
  }
  useEffect(() => {
    setMintState({
      state,
      status: state.status,
    })
  }, [state])
  return { mint, mintState, resetState }
}

export const useMintWithClam = () => {
  const { account } = useEthers()
  const addresses = useAddresses()
  const clam = useERC20(addresses?.CLAM)
  const contract = usePFood()
  const { send, state, resetState } = useContractFunction(contract, 'mintByClam')
  const [mintState, setMintState] = useState({
    state,
    status: state.status,
  })
  const mint = async (amount) => {
    setMintState({
      state,
      status: 'Mining',
    })
    try {
      const allowance = await clam.allowance(account, addresses.PFOOD)
      if (allowance.lt(amount)) {
        await (await clam.approve(addresses.PFOOD, amount)).wait()
      }
      send(amount)
    } catch (e) {
      setMintState({
        state: {
          ...state,
          errorMessage: e.message,
        },
        status: 'Exception',
      })
    }
  }
  useEffect(() => {
    setMintState({
      state,
      status: state.status,
    })
  }, [state])
  return { mint, mintState, resetState }
}
