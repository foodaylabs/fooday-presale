import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import { Typography } from './Typography'
import CLAM from './assets/clam.png'
import FoodCoin from './assets/food.png'
import DAI from './assets/dai.png'
import { useAddresses, useMintWithClam, usePFoodFromClam } from './contracts'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { trim } from './utils/trim'
import { formatEther, formatUnits, parseUnits } from 'ethers/lib/utils'
import { BigNumber, constants } from 'ethers'

const StyledClamPhase = styled.section``

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
  color: #a1a7ba;
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
  display flex;
  flex-direction: column;
  gap: 30px;
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
  &::after {
    content: '';
    display: inline-block;
    background: center / cover url(${({ token }) => token});
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
`

const StyledDiscountContainer = styled.div``

const StyledDiscountTokenBalance = styled(StyledTokenBalance)`
  text-decoration: line-through;
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
  gap: 5px;
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
`

const StyledHintCheckBox = styled.input.attrs({
  type: 'checkbox',
})``

const StyledSubmitButton = styled.button`
  background: #000000;
  border-radius: 5px;
  color: white;
  padding: 15px;
`

export default function ClamPhase({ whitelistStageStartTime, publicStageStartTime, capPerAccount, pFoodPerUsd }) {
  const { t } = useTranslation()
  const [now, setNow] = useState(Date.now())
  const { account } = useEthers()
  const addresses = useAddresses()
  const clamBalance = useTokenBalance(addresses.CLAM, account)
  const [clamAmount, setClamAmount] = useState('1')
  const [isChecked, setIsChecked] = useState(false)
  const { usdPerClam, pFoodAmount } = usePFoodFromClam(parseUnits(clamAmount, 9))
  const started = whitelistStageStartTime < now
  const ended = publicStageStartTime < now
  const phase = !started ? 'not_started' : ended ? 'ended' : 'ongoing'
  const { mint, mintState, resetState } = useMintWithClam()
  const onMax = () => {
    // TODO:
    console.log('max')
  }
  useEffect(() => {
    if (mintState.status === 'Fail' || mintState.status === 'Exception') {
      alert(mintState.state.errorMessage)
      resetState()
    }
  }, [mintState, resetState])
  return (
    <StyledClamPhase>
      <StyledTopContainer>
        <StyledPhase>
          {t('phase', { phase: 1 })}
          <StyledPhaseStatus>{t('phase', { context: phase })}</StyledPhaseStatus>
        </StyledPhase>
        <StyledTitle>{t('clam_holder_phase.title')}</StyledTitle>
        <StyledDesc>{t('clam_holder_phase.desc')}</StyledDesc>
      </StyledTopContainer>
      <StyledBottomContainer>
        <StyledInputContainer>
          <StyledMaxContainer>
            <Typography variant="header2">{t('dialog.purchase_amount')}</Typography>
            <StyledMaxButton onClick={onMax}>{t('dialog.max')}</StyledMaxButton>
          </StyledMaxContainer>
          <StyledTokenInputRow>
            <StyledToken token={CLAM}>CLAM</StyledToken>
            <StyledInput
              placeholder="0"
              value={clamAmount}
              min={0}
              disabled={mintState.status !== 'None'}
              onChange={(e) => {
                if (e.target.value === '') {
                  setClamAmount('')
                } else if (Number(e.target.value)) {
                  setClamAmount(e.target.value)
                }
              }}
            />
          </StyledTokenInputRow>
          <StyledTokenBalance token={CLAM}>
            {t('dialog.balance')}
            {clamBalance ? trim(formatUnits(clamBalance, 9), 2) : '-'} CLAM
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
            <StyledTokenBalance token={CLAM}>1 CLAM</StyledTokenBalance>=
            <StyledTokenBalance token={DAI}>{usdPerClam ? formatEther(usdPerClam) : '-'} DAI</StyledTokenBalance>=
            <StyledDiscountContainer>
              <StyledDiscountTokenBalance token={FoodCoin}>
                {pFoodPerUsd && usdPerClam
                  ? trim(formatEther(pFoodPerUsd.mul(usdPerClam).div(BigNumber.from('10').pow(18))), 1)
                  : '-'}{' '}
                pFOOD
              </StyledDiscountTokenBalance>
              <StyledDiscountPrice>
                <Typography variant="header2" color="#EE5537">
                  {pFoodPerUsd && usdPerClam
                    ? trim(
                        formatEther(pFoodPerUsd.mul(usdPerClam).mul(10000).div(9000).div(BigNumber.from('10').pow(18))),
                        2
                      )
                    : '-'}
                </Typography>
                <StyledDiscountLabel>10% Off</StyledDiscountLabel>
              </StyledDiscountPrice>
            </StyledDiscountContainer>
          </StyledOutputHint>
        </StyledInputContainer>
        <StyledHint>
          <StyledHintCheckBox
            checked={isChecked}
            disabled={mintState.status !== 'None'}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <Typography variant="caption" color="#545864">
            {t('dialog.term')}
          </Typography>
        </StyledHint>
        <StyledSubmitButton onClick={() => mint(clamAmount)} disabled={!isChecked && mintState.status !== 'None'}>
          <Typography variant="header2">
            {t(mintState.status !== 'None' ? 'dialog.processing' : 'dialog.purchase')}
          </Typography>
        </StyledSubmitButton>
      </StyledBottomContainer>
    </StyledClamPhase>
  )
}
