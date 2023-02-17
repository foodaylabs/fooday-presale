import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import FaqImg from '../assets/faq.png'
import { Typography } from '../Typography'
import Minus from '../assets/minus.svg'
import Plus from '../assets/plus.svg'
import { useState } from 'react'

const StyledFaq = styled.section`
  width: 100%;
  display: flex;
  gap: 58px;
  padding: 0 15px;

  @media (max-width: 600px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`

const StyledTitle = styled.h2`
  font-family: 'NeverMind';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
`

const StyledImg = styled.img`
  width: 342px;
  height: 342px;
  margin-top: 48px;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledFaqRow = styled.div`
  padding: 30px;
  gap: 20px;
  background: #f6f7fb;
`

const StyledQuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const StyledQuestion = styled(Typography).attrs({
  as: 'h3',
  variant: 'title3',
})``

const StyledAnswer = styled(Typography).attrs({
  as: 'p',
  variant: 'header2',
})`
  margin-top: 20px;
`

const StyledExpandButton = styled.img`
  width: 24px;
  height: 24px;
`

function FaqRow({ question, answer, i }) {
  const { t } = useTranslation('', { keyPrefix: 'faq' })
  const [expanded, setExpanded] = useState(i === 0)
  return (
    <StyledFaqRow>
      <StyledQuestionRow onClick={() => setExpanded((e) => !e)}>
        <StyledQuestion>{t(question)}</StyledQuestion>
        <StyledExpandButton src={expanded ? Minus : Plus} />
      </StyledQuestionRow>
      {expanded && <StyledAnswer>{t(answer)}</StyledAnswer>}
    </StyledFaqRow>
  )
}

const StyledFaqList = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
  flex: 1;
`

export default function Faq({ className }) {
  const { t } = useTranslation('', { keyPrefix: 'faq' })
  const seq = Array.from(Array(5).keys(), (x) => x + 1)
  return (
    <StyledFaq className={className}>
      <div>
        <StyledTitle>{t('title')}</StyledTitle>
        <StyledImg src={FaqImg} />
      </div>
      <StyledFaqList>
        {seq.map((i) => {
          return <FaqRow key={i} question={`q${i}`} answer={`a${i}`} i={i} />
        })}
      </StyledFaqList>
    </StyledFaq>
  )
}
