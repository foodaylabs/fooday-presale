import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import { Typography } from './Typography'
import CLAM from './assets/clam.png'
import FoodCoin from './assets/food.png'
import { useAddresses, usePFoodFromClam } from './contracts'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { trim } from './utils/trim'
import { formatEther, formatUnits, parseUnits } from 'ethers/lib/utils'
import { constants } from 'ethers'

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

const StyledOutputRow = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

export default function ClamPhase({ whitelistStageStartTime, publicStageStartTime, capPerAccount }) {
  const { t } = useTranslation()
  const [now, setNow] = useState(Date.now())
  const { account } = useEthers()
  const addresses = useAddresses()
  const clamBalance = useTokenBalance(addresses.CLAM, account)
  const [clamAmount, setClamAmount] = useState('1')
  const pFoodAmount = usePFoodFromClam(parseUnits(clamAmount, 9))
  const started = whitelistStageStartTime < now
  const ended = publicStageStartTime < now
  const phase = !started ? 'not_started' : ended ? 'ended' : 'ongoing'
  const onMax = () => {
    // TODO:
    console.log('max')
  }
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
        </StyledInputContainer>
      </StyledBottomContainer>
    </StyledClamPhase>
  )
}
