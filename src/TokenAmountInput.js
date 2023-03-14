import React, { useRef, useState } from 'react'
import styled from 'styled-components/macro'
import daiIcon from './assets/dai.png'
import clamIcon from './assets/clam.png'
import arrowDownIcon from './assets/arrow-down.svg'
import { Typography } from './Typography'
import { useTranslation } from 'react-i18next'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { useAddresses } from './contracts'
import { formatUnits, parseUnits } from 'ethers/lib/utils'
import { BigNumber } from 'ethers'
import useOutsideClick from '@rooks/use-outside-click'
import { trim } from './utils/trim'

const decimals = {
  DAI: 18,
  CLAM: 9,
}

const tokenIcons = {
  DAI: daiIcon,
  CLAM: clamIcon,
}

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledInputContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 64px;
  align-items: center;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 20px 10px 10px;
`

const StyledDropdownContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 10px 20px 10px 10px;
  max-height: 0;
  transition: max-height 0.4s, opacity 0.2s;
  overflow: hidden;
  opacity: 0;

  ${({ opened }) =>
    opened &&
    `
        max-height: 300px;
        opacity: 1;
    `}
`

const StyledDropdownTitle = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledDropdownOptions = styled.div``

const StyledDropdownButton = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #f6f7fb;
    height: 44px;
    border-radius: 10px;
  }
`

const StyledIcon = styled.img`
  width: ${({ small }) => (small ? 16 : 24)}px;
  height: ${({ small }) => (small ? 16 : 24)}px;
`

const StyledArrowDownIcon = styled.img.attrs({ src: arrowDownIcon })`
  width: 16px;
  height: 16px;
`

const StyledInput = styled(Typography).attrs({ type: 'number', as: 'input', variant: 'header2' })`
  flex: 1;
  text-align: right;
  height: 100%;
  background: transparent;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const StyledDropdownContainer = styled.div`
  position: relative;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledMaxButton = styled.button`
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 5px;
`

const StyledFooter = styled.div``

const StyledCurrentBalance = styled(Typography).attrs({ as: 'div', variant: 'body' })`
  display: flex;
  gap: 5px;
  align-items: center;
`

export default function TokenAmountInput({
  token = 'CLAM',
  amount = BigNumber.from(0),
  onTokenChange = () => {},
  onAmountChange = () => {},
} = {}) {
  const ref = useRef(null)
  const { t } = useTranslation()
  const [opened, setOpened] = useState(false)
  const { account } = useEthers()
  const addresses = useAddresses() ?? {}
  const balance = useTokenBalance(addresses[token], account) ?? BigNumber.from('0')

  useOutsideClick(ref, () => {
    setOpened(false)
  })

  const openDropdown = () => setOpened(true)

  const handleAmountChange = (e) => {
    onAmountChange(parseUnits(e.target.value || '0', decimals[token]))
  }

  const handleTokenChange = (token) => {
    onTokenChange(token)
    setOpened(false)
  }

  const handleMax = () => {
    onAmountChange(balance)
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <Typography variant="header2">{t('tokenAmountInput.amount')}</Typography>
        <StyledMaxButton onClick={handleMax}>
          <Typography variant="caption">{t('tokenAmountInput.maxButton')}</Typography>
        </StyledMaxButton>
      </StyledHeader>
      <StyledDropdownContainer ref={ref}>
        <StyledDropdownContent opened={opened}>
          <StyledDropdownTitle>
            <Typography variant="header2">{t('tokenAmountInput.listTitle')}</Typography>
          </StyledDropdownTitle>
          <StyledDropdownOptions>
            {/* <DropdownOption token="DAI" onSelect={handleTokenChange} /> */}
            <DropdownOption token="CLAM" discountRate={0.1} onSelect={handleTokenChange} />
          </StyledDropdownOptions>
        </StyledDropdownContent>
        <StyledInputContainer>
          <StyledDropdownButton onClick={openDropdown}>
            <StyledIcon src={tokenIcons[token]} />
            <Typography variant="header2">{token}</Typography>
            <StyledArrowDownIcon />
          </StyledDropdownButton>
          <StyledInput
            min={0}
            max={formatUnits(balance, decimals[token])}
            value={formatUnits(amount, decimals[token])}
            onChange={handleAmountChange}
          />
        </StyledInputContainer>
      </StyledDropdownContainer>
      <StyledFooter>
        <StyledCurrentBalance color="#000">
          <span>
            {t('tokenAmountInput.balance', { balance: trim(formatUnits(balance, decimals[token]), 2), token })}
          </span>
          <StyledIcon small src={tokenIcons[token]} />
        </StyledCurrentBalance>
        <Typography variant="caption" color="#545864">
          {t('tokenAmountInput.maxAmountNote')}
        </Typography>
      </StyledFooter>
    </StyledContainer>
  )
}

const StyledDropdownOption = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #f6f7fb;
    border-radius: 10px;
  }
`

const StyledDropdownOptionDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const StyledDropdownOptionDiscount = styled(Typography).attrs({ variant: 'caption', color: '#fff' })`
  background: #ee5537;
  padding: 3px 10px;
  border-radius: 5px;
`

function DropdownOption({ token, discountRate = 0, onSelect } = {}) {
  const { account } = useEthers()
  const addresses = useAddresses() ?? {}
  const balance = useTokenBalance(addresses[token], account) ?? BigNumber.from('0')

  return (
    <StyledDropdownOption onClick={() => onSelect(token)}>
      <StyledIcon src={tokenIcons[token]} />
      <StyledDropdownOptionDetail>
        <Typography variant="header2">{token}</Typography>
        <Typography variant="caption" color="#545864">
          {formatUnits(balance, decimals[token])} {token}
        </Typography>
      </StyledDropdownOptionDetail>
      {discountRate > 0 && <StyledDropdownOptionDiscount>{discountRate * 100}% OFF</StyledDropdownOptionDiscount>}
    </StyledDropdownOption>
  )
}
