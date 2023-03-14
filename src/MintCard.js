import React, { useEffect, useMemo, useState } from 'react'
import { trim } from './utils/trim'
import Card from './Card'
import styled from 'styled-components/macro'
import { Typography } from './Typography'
import { useTranslation } from 'react-i18next'
import { useEthers, useTokenBalance } from '@usedapp/core'
import TokenAmountInput from './TokenAmountInput'
import { BigNumber, constants } from 'ethers'
import daiIcon from './assets/dai.png'
import clamIcon from './assets/clam.png'
import foodIcon from './assets/food.png'
import { useAddresses, useMintWithClam, useMint, usePFoodFromClam, usePFoodFromToken } from './contracts'
import { formatEther } from 'ethers/lib/utils'
import { pfoodToLevel } from './utils/levels'
import Checkbox from './Checkbox'
import SuccessDialog from './SuccessDialog'

const tokenIcons = {
  CLAM: clamIcon,
  DAI: daiIcon,
  pFOOD: foodIcon,
}

const StyledCard = styled(Card)`
  background: #f6f7fb;
`

const StyledHead = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  padding: 15px 0;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`

const StyledPreview = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
`

const StyledPreviewAmount = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 20px 10px 10px;
  justify-content: space-between;
`

const StyledPreviewToken = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 10px;
`

const StyledIcon = styled.img`
  width: ${({ small }) => (small ? 16 : 24)}px;
  height: ${({ small }) => (small ? 16 : 24)}px;
`

const StyledPreviewNote = styled(Typography).attrs({ as: 'div', variant: 'caption' })`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`

const StyledLine = styled.div`
  border-top: 1px solid #000;
`

const StyledPreviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
`

const StyledPreviewBalance = styled(Typography).attrs({ as: 'div', variant: 'body' })`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledLevel = styled(Typography).attrs({
  variant: 'caption',
})`
  padding: 3px 10px;
  background: #ffb82e;
  border-radius: 11px;
`

const StyledAgreement = styled(Typography).attrs({ variant: 'caption', color: '#545864' })`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StyledSubmitButton = styled.button`
  background: #000000;
  border-radius: 5px;
  color: white;
  padding: 15px;
  font-family: 'NeverMind';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;

  :disabled {
    background: #a1a7ba;
  }
`

const StyledGuestMessage = styled(Typography).attrs({ variant: 'caption', color: '#545864' })`
  text-align: center;
`

export default function MintCard() {
  const [token, setToken] = useState('DAI')
  const [amount, setAmount] = useState(constants.Zero)
  const [agree, setAgree] = useState(false)
  const { t } = useTranslation()
  const { account, activateBrowserWallet } = useEthers()
  const addresses = useAddresses()
  const pfoodBalance = useTokenBalance(addresses?.PFOOD, account) ?? constants.Zero
  const { pFoodAmount } = usePFoodFromToken(token, amount)
  const newUpdatedBalance = useMemo(() => {
    return pfoodBalance.add(pFoodAmount)
  }, [pFoodAmount, pfoodBalance])
  const currentLevel = useMemo(() => pfoodToLevel(Number(formatEther(pfoodBalance))), [pfoodBalance])
  const newLevel = useMemo(() => pfoodToLevel(Number(formatEther(newUpdatedBalance))), [newUpdatedBalance])
  const mintWithDai = useMint()
  const mintWithClam = useMintWithClam()
  const { mint, mintState, resetState } = token === 'CLAM' ? mintWithClam : mintWithDai

  useEffect(() => {
    if (mintState.status === 'Fail' || mintState.status === 'Exception') {
      alert(mintState.state.errorMessage)
      resetState()
    }
  }, [mintState, resetState])

  return (
    <StyledCard
      head={
        <StyledHead>
          <Typography variant="header1">{t('mintCard.title')}</Typography>
        </StyledHead>
      }
    >
      <StyledContent>
        {!account && (
          <>
            <StyledGuestMessage variant="caption" color="#545864">
              {t('mintCard.guest.message')}
            </StyledGuestMessage>
            <StyledSubmitButton onClick={() => activateBrowserWallet()}>
              {t('mintCard.guest.connectButton')}
            </StyledSubmitButton>
          </>
        )}
        {account && (
          <>
            <TokenAmountInput token={token} amount={amount} onTokenChange={setToken} onAmountChange={setAmount} />
            <StyledPreview>
              <Typography variant="header2">{t('mintCard.preview.title')}</Typography>
              <StyledPreviewAmount>
                <StyledPreviewToken>
                  <StyledIcon src={foodIcon} />
                  <Typography variant="header2">pFOOD</Typography>
                </StyledPreviewToken>
                <Typography variant="header2">{formatEther(pFoodAmount)}</Typography>
              </StyledPreviewAmount>
              <StyledPreviewNote>
                {token === 'DAI' && (
                  <>
                    <TokenAmount token="DAI" amount={1} />
                    <TokenAmount prefix=" = " token="pFOOD" amount={10} />
                  </>
                )}
                {token === 'CLAM' && (
                  <>
                    <TokenAmount token="CLAM" amount={1} />
                    <TokenAmount prefix=" = " token="DAI" amount={2.95} />
                    <TokenAmount prefix=" = " token="pFOOD" amount={29.5} discount={0.1} />
                  </>
                )}
              </StyledPreviewNote>
            </StyledPreview>
            <StyledLine />
            <StyledPreviewDetails>
              <StyledPreviewBalance>
                <span>{t('mintCard.preview.currentClaimed')}</span>
                <TokenAmount token="pFOOD" amount={trim(formatEther(pfoodBalance))} />
              </StyledPreviewBalance>
              <StyledPreviewBalance>
                <span>{t('mintCard.preview.newClaimed')}</span>
                <TokenAmount token="pFOOD" amount={trim(formatEther(pFoodAmount))} />
              </StyledPreviewBalance>
              <StyledPreviewBalance>
                <span>{t('mintCard.preview.newUpdatedBalance')}</span>
                <TokenAmount token="pFOOD" amount={trim(formatEther(newUpdatedBalance))} />
              </StyledPreviewBalance>
              {currentLevel !== newLevel && (
                <StyledLevel>
                  Level {currentLevel} {`->`} Level {newLevel}
                </StyledLevel>
              )}
            </StyledPreviewDetails>
            <StyledAgreement>
              <Checkbox checked={agree} onChange={() => setAgree(!agree)} />
              <div>{t('mintCard.agreementNote')}</div>
            </StyledAgreement>
            <StyledSubmitButton onClick={() => mint(amount)} disabled={amount.eq(0) || !agree}>
              {t('mintCard.purchaseButton')}
            </StyledSubmitButton>
          </>
        )}
      </StyledContent>
      {mintState.status === 'Success' && (
        <SuccessDialog pFoodAmount={trim(formatEther(pFoodAmount), 4)} onClose={() => resetState()} />
      )}
    </StyledCard>
  )
}

const StyledTokenAmount = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`

const StyledTokenAmountNormal = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  ${({ discount }) =>
    discount &&
    `
        text-decoration: line-through;
    `}
`

const StyledTokenAmountDiscount = styled(Typography).attrs({ as: 'div', variant: 'footNote', color: '#ee5537' })`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
`

const StyledTokenAmountDiscountTag = styled(Typography).attrs({ variant: 'footNote', color: '#fff' })`
  background: #ee5537;
  padding: 3px 10px;
  border-radius: 5px;
`

function TokenAmount({ prefix, token, amount = 0, discount = 0 }) {
  return (
    <StyledTokenAmount>
      <span>{prefix}</span>
      <div>
        <StyledTokenAmountNormal discount={discount > 0}>
          <span>{amount}</span>
          <span>{token}</span>
          <StyledIcon src={tokenIcons[token]} small />
        </StyledTokenAmountNormal>
        {discount > 0 && (
          <StyledTokenAmountDiscount>
            <span>{(amount / (1 - discount)).toFixed(2)}</span>
            <span>{token}</span>
            <StyledTokenAmountDiscountTag>{discount * 100}% OFF</StyledTokenAmountDiscountTag>
          </StyledTokenAmountDiscount>
        )}
      </div>
    </StyledTokenAmount>
  )
}
