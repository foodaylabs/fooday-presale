import styled from 'styled-components'
import { Typography } from './Typography'
import intervalToDuration from 'date-fns/intervalToDuration'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const StyledCountdown = styled.div`
  display: flex;
  gap: 10px;
`

const StyledContainer = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledDigit = styled(Typography).attrs({
  variant: 'display2',
  as: 'p',
})``

const StyledLabel = styled(Typography).attrs({
  variant: 'header1',
  as: 'p',
})``

function CountdownDigit({ label, value }) {
  return (
    <StyledContainer>
      <StyledDigit>{typeof value === 'number' ? value.toString().padStart(2, '0') : value}</StyledDigit>
      <StyledLabel>{label}</StyledLabel>
    </StyledContainer>
  )
}

const StyledColon = styled(Typography).attrs({
  variant: 'display2',
  as: 'p',
})``

export default function Countdown({ target }) {
  const { t } = useTranslation()
  const [now, setNow] = useState(Date.now())
  const countdown = useMemo(() => {
    if (now > target) return intervalToDuration({ start: target, end: now })
    return intervalToDuration({ start: now, end: target })
  }, [now, target])
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <StyledCountdown>
      <CountdownDigit label={t('day')} value={countdown.days} />
      <StyledColon>:</StyledColon>
      <CountdownDigit label={t('hour')} value={countdown.hours} />
      <StyledColon>:</StyledColon>
      <CountdownDigit label={t('minute')} value={countdown.minutes} />
      <StyledColon>:</StyledColon>
      <CountdownDigit label={t('second')} value={countdown.seconds} />
    </StyledCountdown>
  )
}
