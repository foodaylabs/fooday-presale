import { useCall, useCalls, useContractFunction, useEthers } from '@usedapp/core'
import { BigNumber, constants, Contract } from 'ethers'
import { parseUnits } from 'ethers/lib/utils'
import { useEffect, useMemo, useState } from 'react'
import PFood from './PFood.json'
import ERC20 from './ERC20.json'

const addresses = {
  137: {
    PFOOD: '0x0d90f283585569e6c284171f6646f37B43522D80',
    CLAM: '0x08a83ee393ac296326196a8f2dacbed91cd84762',
    DAI: '0x19907af68A173080c3e05bb53932B0ED541f6d20',
  },
  80001: {
    PFOOD: '0x0d90f283585569e6c284171f6646f37B43522D80',
    CLAM: '0x08a83ee393ac296326196a8f2dacbed91cd84762',
    DAI: '0x19907af68A173080c3e05bb53932B0ED541f6d20',
  },
}

export const useAddresses = () => {
  const { chainId } = useEthers()
  return useMemo(() => addresses[chainId], [chainId])
}

const usePFood = () => {
  const addresses = useAddresses()
  return useMemo(() => new Contract(addresses.PFOOD, PFood), [addresses.PFOOD])
}

const useERC20 = (address) => {
  const { library } = useEthers()
  return useMemo(() => new Contract(address, ERC20, library?.getSigner()), [address, library])
}

export const usePFoodInfo = () => {
  const contract = usePFood()
  const results = useCalls([
    {
      contract,
      method: 'pFoodPerUsd',
    },
    {
      contract,
      method: 'capPerAccount',
    },
    {
      contract,
      method: 'whitelistStageStartTime',
    },
    {
      contract,
      method: 'publicStageStartTime',
    },
    {
      contract,
      method: 'totalSupply',
    },
    {
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

export const usePFoodPerClam = (clamAmount) => {
  const addresses = useAddresses()
  const contract = usePFood()
  const result = useCall({
    contract,
    method: 'calcReceivedAmount',
    args: [addresses.CLAM, clamAmount],
  })
  return result?.value?.[0]
}

export const useMintWithClam = () => {
  const addresses = useAddresses()
  const clam = useERC20(addresses.CLAM)
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
    const allowance = await clam.allowance(addresses.PFOOD, addresses.CLAM)
    if (allowance.lt(amount)) {
      await (await clam.approve(addresses.PFOOD, amount)).wait()
    }
    send(amount)
  }
  useEffect(() => {
    setMintState({
      state,
      status: state.status,
    })
  }, [state])
  return { mint, mintState, resetState }
}
