import { useEthers, useTokenBalance } from '@usedapp/core'
import { formatEther, formatUnits, parseUnits } from 'ethers/lib/utils'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import DAI from './assets/dai.png'
import FoodCoin from './assets/food.png'
import { useAddresses, useMintWithClam, usePFoodFromDai } from './contracts'
import SuccessDialog from './SuccessDialog'
import { Typography } from './Typography'
import { trim } from './utils/trim'
import Checkbox from './Checkbox'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const StyledClamPhase = styled.section`
  position: relative;
  background: #fff;
`

const StyledTopContainer = styled.div`
  padding: 40px;
  border-radius: 20px 20px 0 0;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledPhase = styled(Typography).attrs({
  as: 'p',
  variant: 'header2',
})``

const StyledPhaseStatus = styled.span`
  color: #47cbab;
  margin-left: 10px;
`

const StyledPhaseStatus2 = styled.span`
  color: #ee5537;
  margin-left: 10px;
`

const StyledTitle = styled(Typography).attrs({
  as: 'h2',
  variant: 'title1',
})``

const StyledDesc = styled(Typography).attrs({
  as: 'p',
  variant: 'header2',
})`
  color: #545864;
`

const StyledBottomContainer = styled.div`
  background: #f6f7fb;
  border: 1px solid #000000;
  border-top: 0px;
  border-radius: 0 0 20px 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledBottomContainer2 = styled(StyledBottomContainer)`
  padding: 10px 40px;
`

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledMaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledMaxButton = styled.button`
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 3px 10px;
`

const StyledTokenInputRow = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #000000;
  border-radius: 10px;
  background: white;
  padding: 20px;
`

const StyledToken = styled(Typography).attrs({
  as: 'p',
  variant: 'header2',
})`
  display: flex;
  align-items: center;
  &::before {
    content: '';
    display: inline-block;
    background: center / cover url(${({ token }) => token});
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`

const StyledInput = styled.input`
  white-space: pre-line;
  min-width: 0px;
  width: 100%;
  text-align: right;
`

const StyledTokenBalance = styled(Typography).attrs({
  variant: 'body',
})`
  display: flex;
  align-items: center;
  white-space: nowrap;

  &::after {
    content: '';
    display: inline-block;
    background: center / cover url(${({ token }) => token});
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
`

const StyledDiscountContainer = styled.div`
  flex: 1;
  display: flex;
`

const StyledOutputRow = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const StyledOutputHint = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const StyledDiscountPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const StyledDiscountLabel = styled(Typography).attrs({
  variant: 'caption',
})`
  color: white;
  background: #ee5537;
  border-radius: 5px;
  padding: 3px 10px;
`

const StyledHint = styled.label`
  display: flex;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  user-select: none;
`

const StyledSubmitButton = styled.button`
  background: #000000;
  border-radius: 5px;
  color: white;
  padding: 15px;

  :disabled {
    background: #a1a7ba;
  }
`

const StyledConnectContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledTokenBalanceContainer = styled.span`
  display: flex;
  gap: 8px;
`

const StyledCheckbox = styled(Checkbox)`
  flex: 0 20px;
  min-width: 20px;
`

export default function PublicPhase({ whitelistStageStartTime, publicStageStartTime, capPerAccount, pFoodPerUsd }) {
  const { t } = useTranslation()
  const [now, setNow] = useState(Date.now())
  const { account, activateBrowserWallet, switchNetwork } = useEthers()
  const addresses = useAddresses()
  const daiBalance = useTokenBalance(addresses?.DAI, account)
  const pFoodBalance = useTokenBalance(addresses?.PFOOD, account)
  const [daiAmount, setDAIAmount] = useState('1')
  const [isChecked, setIsChecked] = useState(false)
  const { pFoodAmount } = usePFoodFromDai(parseUnits(daiAmount || '0', 18))
  const started = publicStageStartTime < now
  const phase = !started ? 'not_started' : 'ongoing'
  const { mint, mintState, resetState } = useMintWithClam()
  const onMax = () => {
    const daiCapPerAccount = capPerAccount
      .sub(pFoodBalance)
      .div(10)
    const max = daiBalance?.gt(daiCapPerAccount) ? daiCapPerAccount : daiBalance
    setDAIAmount(formatUnits(max, 9))
  }
  useEffect(() => {
    if (mintState.status === 'Fail' || mintState.status === 'Exception') {
      alert(mintState.state.errorMessage)
      resetState()
    }
  }, [mintState, resetState])
  return (
    <StyledContainer>
      <StyledClamPhase>
        <StyledTopContainer>
          <StyledPhase>
            {t('phase', { phase: 2 })}
            <StyledPhaseStatus>{t('phase', { context: phase })}</StyledPhaseStatus>
          </StyledPhase>
          <StyledTitle>{t('public_phase.title')}</StyledTitle>
          <StyledDesc>{t('public_phase.desc')}</StyledDesc>
        </StyledTopContainer>
        <StyledBottomContainer>
          {!account && (
            <StyledConnectContainer>
              <Typography variant="header3" color="#545864">
                {t('connect_desc')}
              </Typography>
              <StyledSubmitButton onClick={() => activateBrowserWallet()}>{t('connect_btn')}</StyledSubmitButton>
            </StyledConnectContainer>
          )}
          {account && (
            <>
              <StyledInputContainer>
                <StyledMaxContainer>
                  <Typography variant="header2">{t('dialog.purchase_amount')}</Typography>
                  <StyledMaxButton onClick={onMax}>{t('dialog.max')}</StyledMaxButton>
                </StyledMaxContainer>
                <StyledTokenInputRow>
                  <StyledToken token={DAI}>DAI</StyledToken>
                  <StyledInput
                    placeholder="0"
                    value={daiAmount}
                    min={0}
                    disabled={mintState.status !== 'None'}
                    onChange={(e) => {
                      if (e.target.value === '') {
                        setDAIAmount('')
                      } else if (Number(e.target.value)) {
                        setDAIAmount(e.target.value)
                      }
                    }}
                  />
                </StyledTokenInputRow>
                <StyledTokenBalance token={DAI}>
                  {t('dialog.balance')}
                  {daiBalance ? trim(formatUnits(daiBalance, 9), 2) : '-'} DAI
                </StyledTokenBalance>
                <Typography as="p" color="#545864" variant="caption">
                  {t('dialog.max_allowed', { max: trim(formatEther(capPerAccount)) })}
                </Typography>
              </StyledInputContainer>
              <StyledInputContainer>
                <Typography variant="header2">{t('dialog.claim')}</Typography>
                <StyledOutputRow>
                  <StyledToken token={FoodCoin}>pFOOD</StyledToken>
                  <Typography variant="header2">{pFoodAmount ? trim(formatEther(pFoodAmount), 4) : '-'}</Typography>
                </StyledOutputRow>
                <StyledOutputHint>
                  <StyledTokenBalanceContainer>
                    <StyledTokenBalance token={DAI}>1 DAI</StyledTokenBalance>=
                  </StyledTokenBalanceContainer>
                  <StyledDiscountContainer>
                    <StyledTokenBalance token={FoodCoin}>10 pFOOD</StyledTokenBalance>
                  </StyledDiscountContainer>
                </StyledOutputHint>
              </StyledInputContainer>
              <StyledHint>
                <StyledCheckbox
                  checked={isChecked}
                  disabled={mintState.status !== 'None'}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <Typography variant="caption" color="#545864">
                  {t('dialog.term')}
                </Typography>
              </StyledHint>
              {!addresses && (
                <StyledSubmitButton onClick={() => switchNetwork(137)}>
                  <Typography variant="header2">{t('dialog.switch_network_btn')}</Typography>
                </StyledSubmitButton>
              )}
              {addresses && (
                <StyledSubmitButton
                  onClick={() => mint(parseUnits(daiAmount, 9))}
                  disabled={phase === 'not_started' || !isChecked || mintState.status !== 'None'}
                >
                  <Typography variant="header2">
                    {t(
                      !addresses
                        ? 'dialog.switch_network_btn'
                        : phase === 'not_started'
                        ? 'phase_not_started'
                        : mintState.status !== 'None'
                        ? 'dialog.processing'
                        : isChecked
                        ? 'dialog.purchase_btn'
                        : 'dialog.please_agree_btn'
                    )}
                  </Typography>
                </StyledSubmitButton>
              )}
            </>
          )}
        </StyledBottomContainer>
        {mintState.status === 'Success' && (
          <SuccessDialog pFoodAmount={trim(formatEther(pFoodAmount), 4)} onClose={() => resetState()} />
        )}
      </StyledClamPhase>

      <StyledClamPhase>
        <StyledTopContainer>
          <StyledPhase>
            {t('phase', { phase: 1 })}
            <StyledPhaseStatus2>{t('phase', { context: 'ended' })}</StyledPhaseStatus2>
          </StyledPhase>
          <StyledTitle>{t('clam_holder_phase.title')}</StyledTitle>
          <StyledDesc>{t('clam_holder_phase.desc')}</StyledDesc>
        </StyledTopContainer>
        <StyledBottomContainer2>
          <Typography variant="body">{t('phase_duration', { start: whitelistStageStartTime.toLocaleString(), end: publicStageStartTime.toLocaleString() })}</Typography>
        </StyledBottomContainer2>
      </StyledClamPhase>
    </StyledContainer>
  )
}
