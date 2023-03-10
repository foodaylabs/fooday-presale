import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import image from './fooca-reward-img.webp'
import carIcon from './car.svg'
import unlockedIcon from './unlocked-icon.svg'
import lockedIcon from './locked-icon.svg'
import { Typography } from '../Typography'
import { useTranslation } from 'react-i18next'
import { levels, pfoodToLevel } from '../utils/levels'
import { useAddresses } from '../contracts'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { formatEther, parseEther } from 'ethers/lib/utils'
import { BigNumber } from 'ethers'
import { trim } from '../utils/trim'

const StyledCard = styled(Card)`
    background: #f6f7fb;
`

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background: rgba(25, 32, 57);
    color: #fff;
    width: 100%;
`

const StyledImage = styled.img`
    max-width: 346px;
    width: 100%;
    aspect-ratio: 346 / 233;
`

const StyledListHead = styled(Typography).attrs({ variant: 'body', as: 'div' })`
    display: flex;
    gap: 20px;
    padding: 0 15px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        display: none;
    }
`

const StyledLevelCol = styled.div`
    flex: 0;
    width: 85px;
    min-width: 85px;
    display: flex;
    align-items: center;
    justify-content;
`

const StyledAmountCol = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content;
    white-space: nowrap;

    ${({ locked }) => locked && `
        color: #a1a7ba;
    `}
`

const StyledRewardsCol = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    white-space: nowrap;

    ${({ locked }) => locked && `
        color: #a1a7ba;
    `}

    @media (max-width: 768px) {
        justify-content: flex-end;
        color: #a1a7ba;
    }
`

const StyledRewardsTitle = styled(Typography).attrs({ variant: 'header1', as: 'div' })`
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
`

const StyledLevels = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
`

const StyledLevel = styled.div`
    display: flex;
    position: relative;
    border: 2px solid #CCD4E3;
    border-radius: 10px;
    background: #fff;
    padding: 12px 15px;
    overflow: hidden;
    gap: 20px;

    ${({ locked }) => locked && `
        border: none;
    `}

    ${({ isCurrentLevel }) => isCurrentLevel && `
        border-color: #ffb82e;
        padding-top: 42px;

        &::before {
            top: 0;
            left: 0;
            right: 0;
            position: absolute;
            display: flex;
            content: attr(data-title);
            background: #ffb82e;
            height 30px;
            align-items: center;
            justify-content: center;
        }
    `}

    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 5px 20px;
    }
`

const StyledLevelTag = styled(Typography).attrs({ variant: 'body' })`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #a1a7ba;
    border-radius: 15px;
    width: 85px;
    height: 30px;
    gap: 5px;

    &::before {
        display: inline-block;
        content: '';
        width: 12px;
        height: 12px;
        background: center / cover url('${({ locked }) => locked ? lockedIcon : unlockedIcon}');
    }

    ${({ isCurrentLevel }) => isCurrentLevel && `
        background: #ffb82e;
    `}

    ${({ locked }) => locked && `
        background: #fff;
        border: 1px solid #E9EBF3;
        color: #a1a7ba !important;
    `}
`

const StyledNote = styled(Typography).attrs({ variant: 'body' })`
    display: flex;
    gap: 20px;

    &::before {
        content: '';
        width: 50px;
        min-width: 50px;
        height: 50px;
        background: center / cover url(${carIcon});
    }
`

export default function AirdropCard() {
    const { t } = useTranslation()
    const { account } = useEthers()
    const addresses = useAddresses()
    const balance = useTokenBalance(addresses?.PFOOD, account) ?? BigNumber.from(0)
    const currentLevel = pfoodToLevel(Number(formatEther(balance)))

    return (
        <StyledCard head={(
            <StyledHeader>
                <Typography style={{ marginBottom: '10px' }} variant="title1">{t('airdropCard.title')}</Typography>
                <Typography style={{ marginBottom: '20px' }} variant="header1">{t('airdropCard.subTitle')}</Typography>
                <Typography style={{ marginBottom: '20px' }} variant="body">{t('airdropCard.message')}</Typography>
                <StyledImage src={image} />
            </StyledHeader>
        )}>
            <StyledRewardsTitle>{t('airdropCard.rewards.title')}</StyledRewardsTitle>
            <StyledListHead>
                <StyledLevelCol>{t('airdropCard.rewards.level')}</StyledLevelCol>
                <StyledAmountCol>{t('airdropCard.rewards.minPurchased')}</StyledAmountCol>
                <StyledRewardsCol>{t('airdropCard.rewards.rewards')}</StyledRewardsCol>
            </StyledListHead>
            <StyledLevels>
                {levels.map(({ level, minimum }) => (
                    <StyledLevel
                        key={level}
                        data-title={t('airdropCard.rewards.unlocked')}
                        isCurrentLevel={level === currentLevel}
                        locked={currentLevel < level}>
                        <StyledLevelCol>
                            <StyledLevelTag
                                isCurrentLevel={level === currentLevel}
                                locked={currentLevel < level}>
                                Level {level}
                            </StyledLevelTag>
                        </StyledLevelCol>
                        <StyledAmountCol locked={currentLevel < level}>
                            <Typography variant="header3">{trim(formatEther(parseEther(String(minimum))), 2)} pFOOD</Typography>
                        </StyledAmountCol>
                        <StyledRewardsCol locked={currentLevel < level}>
                            {level > 0 && (
                                <Typography variant="header3">{t('airdropCard.rewards.genesisFoocaCamera')} x{level}</Typography>
                            )}
                        </StyledRewardsCol>
                    </StyledLevel>
                ))}
            </StyledLevels>

            <StyledNote>
                {t('airdropCard.rewards.note')}
            </StyledNote>
        </StyledCard>
    )
}