import React, { useEffect, useMemo, useRef, useState } from 'react'
import Card from '../Card'
import FoodCoin from '../assets/food.png'
import styled from 'styled-components/macro'
import { Typography } from '../Typography'
import Countdown from '../Countdown'
import { useTranslation } from 'react-i18next'
import { usePFoodInfo } from '../contracts'
import { formatEther } from 'ethers/lib/utils'
import { trim } from '../utils/trim'

const START_TIME = new Date('2023-02-19:12:00:00.000Z')
const END_TIME = new Date('2023-04-18T11:59:59.999Z')

const StyledCard = styled(Card)`
    ${({ fixed: { fixed, width, left, bottom }, isMobile }) => fixed && !isMobile && `
        position: fixed;
        width: ${width}px;
        left: ${left}px;
        ${bottom !== 0 ? `
            top: 20px;
        ` : ''}
        ${bottom === 0 ? `
            position: absolute;
            left: 0;
            bottom: 0;
        ` : ''}
    `}
    background: #fff;
`

const StyledHead = styled.div`
    width: 100%;
`

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 40px;
    align-items: flex-start;
    text-align: left;
`

const StyledStatus = styled(Typography).attrs({ variant: 'header2', color: '#47cbab' })``

const StyledCountdownArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    color: white;
    background: black;
    padding: 40px;
`

const StyledCountdown = styled(Countdown)``

const StyledCountdownTitle = styled(Typography).attrs({
    as: 'h2',
    variant: 'header1',
})``

const StyledSellDuration = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledCollectedArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 40px;
    text-align: left;
`

const StyledProgressBar = styled.div`
    width: 100%;
    height: 7px;
    background: #e9ebf3;
`

const StyledProgressBarProgress = styled.div`
    width: ${({ progress }) => progress}%;
    height: 100%;
    background: #000000;
`

const StyledTotalCollectedFood = styled(Typography).attrs({
    as: 'p',
    variant: 'title1',
})`
    display: flex;
    align-items: left;
    &::before {
        content: '';
        display: inline-block;
        background: center / cover url(${FoodCoin});
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
`

const StyledGoal = styled(Typography).attrs({
    as: 'p',
    variant: 'header3',
})`
    color: #545864;
`

const useFixed = (ref) => {
    const [fixed, setFixed] = useState({ fixed: false, width: 0, left: 0 })

    useEffect(() => {
        const handleScroll = () => {
            const parentRect = ref.current?.parentElement?.getBoundingClientRect()
            const rect = ref.current?.getBoundingClientRect()
            const newValue = {
                fixed: parentRect && parentRect?.top < 0,
                left: parentRect?.left,
                bottom: parentRect?.bottom > rect?.height ? undefined : 0,
                width: parentRect?.width,
            }
            setFixed((oldValue) => {
                if (oldValue.fixed !== newValue.fixed || oldValue.bottom !== newValue.bottom) {
                    return newValue
                }
                return oldValue
            })
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return fixed
}


export default function PresaleCard() {
    const ref = useRef()
    const { t } = useTranslation()
    const { totalSupply, cap } = usePFoodInfo()
    const progress = useMemo(() => totalSupply?.mul(100).div(cap).toString(), [totalSupply, cap])
    const fixed = useFixed(ref)
    const isMobile = window.innerWidth <= 768

    return (
        <StyledCard ref={ref} fixed={fixed} isMobile={isMobile} head={(
            <StyledHead>
                <StyledInfo>
                    <StyledStatus>{t('presaleCard.ongoing')}</StyledStatus>
                    <Typography variant="title1">{t('presaleCard.title')}</Typography>
                    <Typography
                        variant="body"
                        dangerouslySetInnerHTML={{ __html: t('presaleCard.message') }} />
                </StyledInfo>
                <StyledCountdownArea>
                    <StyledCountdownTitle>{t('presaleCard.countdownTitle')}</StyledCountdownTitle>
                    <StyledCountdown target={END_TIME} />
                    <StyledSellDuration>
                    <Typography variant="header3" as="p">
                        {t('presaleCard.presaleDuration', {
                            start: START_TIME.toLocaleString(),
                            end: END_TIME.toLocaleString(),
                        })}
                    </Typography>
                    </StyledSellDuration>
                </StyledCountdownArea>
                 <StyledCollectedArea>
                    <Typography variant="header2" as="h3">
                      {t('total_collected')}
                    </Typography>
                    <StyledProgressBar>
                      <StyledProgressBarProgress progress={progress}></StyledProgressBarProgress>
                    </StyledProgressBar>
                    <StyledTotalCollectedFood>{trim(formatEther(totalSupply), 0)} pFOOD</StyledTotalCollectedFood>
                    <StyledGoal>
                      {t('goal', {
                        percent: progress,
                        goal: trim(formatEther(cap), 0),
                      })}
                    </StyledGoal>
                  </StyledCollectedArea>
                </StyledHead>
        )} />
    )
}