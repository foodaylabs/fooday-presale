import { useEthers } from '@usedapp/core'
import { formatEther } from 'ethers/lib/utils'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import FoodCoin from './assets/food.png'
import ClamPhase from './ClamPhase'
import { usePFoodInfo } from './contracts'
import Countdown from './Countdown'
import Footer from './Footer'
import Topbar from './Topbar'
import { Typography } from './Typography'
import { trim } from './utils/trim'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledHeadline = styled.h1`
  margin-top: 114px;
  text-align: center;
`

const StyledHeadlineDesc = styled.p`
  margin-top: 30px;
  text-align: center;
`

const StyledBody = styled.div`
  width: 570px;

  @media (max-width: 600px) {
    width: 90%;
  }
`

const StyledInfoSection = styled.section`
  margin-top: 60px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #000000;
  margin-bottom: 20px;
`

const StyledCountdownArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  color: white;
  background: black;
  padding: 40px;
`

const StyledCountdownTitle = styled(Typography).attrs({
  as: 'h2',
  variant: 'header1',
})``

const StyledCountdown = styled(Countdown)``

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
  align-items: center;
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

const END_TIME = new Date('2023-03-17T23:59:59.999Z')

function App() {
  const { t } = useTranslation()
  const { activateBrowserWallet, account } = useEthers()
  const { pFoodPerUsd, capPerAccount, whitelistStageStartTime, publicStageStartTime, totalSupply, cap } = usePFoodInfo()
  const [now, setNow] = useState(Date.now())
  const phase = useMemo(() => {
    if (now < whitelistStageStartTime) {
      return 'pre_clam'
    } else if (now < publicStageStartTime) {
      return 'in_clam'
    } else {
      return 'public'
    }
  }, [now, whitelistStageStartTime, publicStageStartTime])
  const countdownTarget = useMemo(() => {
    if (now < whitelistStageStartTime) {
      return whitelistStageStartTime
    } else if (now < publicStageStartTime) {
      return publicStageStartTime
    } else {
      return END_TIME
    }
  }, [now, whitelistStageStartTime, publicStageStartTime])
  const progress = useMemo(() => totalSupply?.mul(100).div(cap).toString(), [totalSupply, cap])
  return (
    <div>
      <Topbar />
      <StyledMain>
        <StyledHeadline>
          <Typography variant="display1">{t('headline')}</Typography>
        </StyledHeadline>
        <StyledHeadlineDesc>
          <Typography variant="header1">{t('headline_desc')})</Typography>
        </StyledHeadlineDesc>
        <StyledBody>
          <StyledInfoSection>
            <StyledCountdownArea>
              <StyledCountdownTitle>{t('countdown_title.' + phase)}</StyledCountdownTitle>
              <StyledCountdown target={countdownTarget}></StyledCountdown>
              <StyledSellDuration>
                <Typography variant="header3" as="p">
                  {t('duration_clam', {
                    start: whitelistStageStartTime.toLocaleString(),
                    end: publicStageStartTime.toLocaleString(),
                  })}
                </Typography>
                <Typography variant="header3" as="p">
                  {t('duration_public', {
                    start: publicStageStartTime.toLocaleString(),
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
          </StyledInfoSection>
          <ClamPhase
            whitelistStageStartTime={whitelistStageStartTime}
            publicStageStartTime={publicStageStartTime}
            capPerAccount={capPerAccount}
            pFoodPerUsd={pFoodPerUsd}
          />
        </StyledBody>
      </StyledMain>
      <Footer />
    </div>
  )
}

export default App
