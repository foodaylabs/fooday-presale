import styled, { css } from 'styled-components'

export const variants = {
  display1: {
    size: 40,
    weight: '700',
    lineHeight: 52,
  },
  display2: {
    size: 40,
    weight: '600',
    lineHeight: 52,
  },
  title1: {
    size: 28,
    lineHeight: 34,
    weight: '500', // medium
  },
  title2: {
    size: 24,
    lineHeight: 28,
    weight: '500', // medium
  },
  title3: {
    size: 20,
    lineHeight: 26,
    weight: '500', // medium
  },
  header1: {
    size: 18,
    lineHeight: 24,
    weight: '500', // medium
  },
  header2: {
    size: 16,
    lineHeight: 22,
    weight: '500', // medium
  },
  header3: {
    size: 14,
    lineHeight: 20,
    weight: '500', // medium
  },
  body: {
    size: 14,
    lineHeight: 20,
  },
  article: {
    size: 14,
    lineHeight: 24,
  },
  footNote: {
    size: 13,
    lineHeight: 18,
  },
  caption1: {
    size: 12,
    lineHeight: 16,
  },
  caption2: {
    size: 11,
    lineHeight: 15,
  },
  smallMark1: {
    size: 11,
    lineHeight: 15,
    weight: '500', // medium
  },
  smallMark2: {
    size: 9,
    lineHeight: 12,
    weight: '500', // medium
  },
}

export const typography = ({ variant }) => css`
  font-family: 'NeverMind';
  font-size: ${() => variants[variant].size}px;
  font-weight: ${() => variants[variant].weight ?? '400'};
  line-height: ${() => variants[variant].lineHeight}px;
`

export const Typography = styled.span`
  ${(props) => typography(props)}
`
