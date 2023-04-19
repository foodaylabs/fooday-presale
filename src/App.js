import { useEthers } from '@usedapp/core'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import AirdropCard from './AirdropCard'
import EllipseImageUrl from './assets/ellipse.svg'
import FoodcoinImageUrl from './assets/text-foodcoin.svg'
import Faq from './Faq'
import Footer from './Footer'
import PresaleCard from './PresaleCard'
import RewardCard from './RewardCard'
import Topbar from './Topbar'
import { Typography } from './Typography'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

const StyledHeadlineContainer = styled.div`
  width: 60%;
  @media (max-width: 600px) {
    width: 90%;
  }
`

const StyledHeadline = styled.h1`
  margin-top: 114px;
  text-align: center;
`

const StyledHeadlineDesc = styled.p`
  margin-top: 30px;
  text-align: center;
`

const StyledBodyContainer = styled.div`
  position: relative;
  max-width: 1088px;
  width: 100%;
  margin: 60px auto 0;
  background: right 163.41px top / 51.85px 352.59px no-repeat url(${FoodcoinImageUrl});

  &::before {
    content: '';
    position: absolute;
    width: 528px;
    height: 459px;
    background: center / cover url(${EllipseImageUrl});
    z-index: -1;
    left: -264px;
    top: -306px;
  }
`

const StyledCards = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin: 15px;
  }
`

const StyledCardsRightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`

const StyledCardsLeftColumn = styled.div`
  flex: 0 36.7521368%;
  min-width: 36.7521368%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`

const StyledFaq = styled(Faq)`
  margin-top: 100px;
`

function App() {
  const { t } = useTranslation()
  const { account } = useEthers()
  return (
    <div>
      <Topbar />
      <StyledMain>
        <StyledHeadlineContainer>
          <StyledHeadline>
            <Typography variant="display1">{t('headline')}</Typography>
          </StyledHeadline>
          <StyledHeadlineDesc>
            <Typography variant="header1">{t('headline_desc')})</Typography>
          </StyledHeadlineDesc>
        </StyledHeadlineContainer>
        <StyledBodyContainer>
          <StyledCards>
            <StyledCardsLeftColumn>
              <PresaleCard />
            </StyledCardsLeftColumn>
            <StyledCardsRightColumn>
              {account && <RewardCard />}
              <AirdropCard />
            </StyledCardsRightColumn>
          </StyledCards>
          <StyledFaq />
        </StyledBodyContainer>
      </StyledMain>
      <Footer />
    </div>
  )
}

export default App
