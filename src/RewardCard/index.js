import { useEthers, useTokenBalance } from '@usedapp/core'
import { BigNumber, constants } from 'ethers'
import { formatEther, parseEther } from 'ethers/lib/utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import Card from '../Card'
import { useAddresses } from '../contracts'
import { Typography } from '../Typography'
import { amountOfLevel, calcAmountToNextLevel, pfoodToLevel } from '../utils/levels'
import { trim } from '../utils/trim'
import cameraImage from './camera.webp'
import lockedIcon from './locked.svg'
import unlockedIcon from './unlocked.svg'

const StyledTitle = styled(Typography).attrs({ variant: 'header1' })`
  display: flex;
  height: 54px;
  align-items: center;
  justify-content: center;
  background: #ffb82e;
  width: 100%;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledLevelStatus = styled.div`
  display: flex;
  gap: 20px;
`

const StyledLevelStatusContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-right: 1px #e9ebf3 solid;
`

const StyledCameraImage = styled.img`
  width: 44px;
  height: 44px;
`

const StyledProgress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: scratch;
  text-align: center;
  gap: 5px;
`

const StyledProgressBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 4px);
    left: 36px;
    right: 36px;
    height: 8px;
    background: #e9ebf3;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 4px);
    left: 36px;
    height: 8px;
    width: calc((100% - 36px * 2) * ${({ progress }) => progress});
    background: #ffb82e;
  }
`

const StyledLockerIcon = styled.img`
  width: 36px;
  height: 36px;
`

const StyledProgressLevels = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledProgressLevel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:last-child {
    align-items: flex-end;
  }
`

export default function RewardCard() {
  const { t } = useTranslation()
  const { account } = useEthers()
  const addresses = useAddresses()
  const balance = useTokenBalance(addresses?.PFOOD, account) ?? constants.Zero
  const balanceNumber = Number(formatEther(balance))
  const level = pfoodToLevel(balanceNumber)
  console.log('level: ', level)
  const amountToNextLevel = parseEther(String(calcAmountToNextLevel(balanceNumber)))
  const currLevelRequiredAmount = parseEther(String(amountOfLevel(level)))
  const nextLevelRequiredAmount = parseEther(String(amountOfLevel(level + 1)))
  const progress =
    Number(formatEther(balance.sub(currLevelRequiredAmount))) /
    Number(formatEther(nextLevelRequiredAmount.sub(currLevelRequiredAmount)))

  return (
    <Card head={<StyledTitle>{t('rewardCard.title')}</StyledTitle>}>
      <StyledContent>
        <StyledLevelStatus>
          <StyledLevelStatusContent>
            <Typography variant="caption">{t('rewardCard.currStatusLabel')}</Typography>
            <Typography variant="title3">Level {level}</Typography>
          </StyledLevelStatusContent>
          <StyledCameraImage src={cameraImage} />
        </StyledLevelStatus>

        {level < 6 && (
          <>
            <StyledProgress>
              <Typography variant="header3">
                {t('rewardCard.purchasedAmount', { amount: trim(formatEther(balance)) })}
              </Typography>
              <StyledProgressBar progress={progress}>
                <StyledLockerIcon src={unlockedIcon} />
                <StyledLockerIcon src={lockedIcon} />
              </StyledProgressBar>
              <StyledProgressLevels>
                <StyledProgressLevel>
                  <Typography variant="header2">Level {level}</Typography>
                  <Typography variant="caption" color="#545864">
                    {trim(formatEther(currLevelRequiredAmount))} pFOOD
                  </Typography>
                </StyledProgressLevel>
                <StyledProgressLevel>
                  <Typography variant="header2">Level {level + 1}</Typography>
                  <Typography variant="caption" color="#545864">
                    {trim(formatEther(nextLevelRequiredAmount))} pFOOD
                  </Typography>
                </StyledProgressLevel>
              </StyledProgressLevels>
            </StyledProgress>

            <Typography
              variant="caption"
              dangerouslySetInnerHTML={{
                __html: t('rewardCard.nextLevelNote', {
                  amount: trim(formatEther(amountToNextLevel), 2),
                  level: level + 1,
                }),
              }}
            />
          </>
        )}
      </StyledContent>
    </Card>
  )
}
