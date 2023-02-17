import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import FoodCoin from './assets/Food.svg'
import { Typography } from './Typography'
import StreamUp from './assets/streamers-up.png'
import StreamDown from './assets/streamers-down.png'
import ReactDOM from 'react-dom'
import TwitterIcon from './assets/twitter.svg'
import DiscordIcon from './assets/discord.svg'
import MediumIcon from './assets/medium.svg'
import InstagramIcon from './assets/ig.svg'
import config from './config'
import CloseIcon from './assets/close.svg'

const links = [
  {
    icon: TwitterIcon,
    link: config.TWITTER_URL,
  },
  {
    icon: DiscordIcon,
    link: config.DISCORD_URL,
  },
  {
    icon: MediumIcon,
    link: config.MEDIUM_URL,
  },
  {
    icon: InstagramIcon,
    link: config.IG_URL,
  },
]

const StyledSuccessDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    width: 100%;
    height: 100%;
    opacity: 50%;
    z-index: -1;
  }
`

const StyledDialog = styled.div`
  position: relative;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 40px;
  padding: 40px;
  text-align: center;
`

const StyledCloseButton = styled.img.attrs({
  src: CloseIcon,
})`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`

const StyledStream = styled.img`
  width: 300px;
  height: 60px;
`

const StyledPFoodAmount = styled(Typography).attrs({
  variant: 'title1',
})`
  display: flex;
  align-items: center;
  &::before {
    content: '';
    display: inline-block;
    background: center / cover url(${FoodCoin});
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`

const StyledDesc = styled(Typography).attrs({
  as: 'p',
  variant: 'header2',
})`
  color: #545864;
  margin-top: 40px;
`

const StyledDivider = styled.div`
  background: #e9ebf3;
  width: 100%;
  height: 1px;
  margin: 20px 0;
`

const StyledHint = styled(Typography).attrs({
  as: 'p',
  variant: 'body',
})`
  color: #545864;
`

const StyledLinks = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`

const StyledLinkIcon = styled.img`
  width: 32px;
  height: 32px;
`

export default function SuccessDialog({ pFoodAmount, onClose }) {
  const { t } = useTranslation('', { keyPrefix: 'success' })
  return ReactDOM.createPortal(
    <StyledSuccessDialog>
      <StyledDialog>
        <Typography as="h1" variant="display1">
          {t('title')}
        </Typography>
        <StyledStream src={StreamUp} />
        <StyledPFoodAmount>{pFoodAmount} pFOOD</StyledPFoodAmount>
        <StyledStream src={StreamDown} />
        <StyledDesc>{t('desc')}</StyledDesc>
        <StyledDivider />
        <StyledHint>{t('hint')}</StyledHint>
        <StyledLinks>
          {links.map(({ icon, link }) => (
            <a href={link} target="_blank" rel="noreferrer">
              <StyledLinkIcon src={icon} />
            </a>
          ))}
        </StyledLinks>
        <StyledCloseButton onClick={onClose} />
      </StyledDialog>
    </StyledSuccessDialog>,
    document.querySelector('#modal-root') ?? document.body
  )
}
