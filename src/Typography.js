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
  caption: {
    size: 12,
    lineHeight: 16,
  },
}

export const typography = ({ variant, color }) => css`
  font-family: 'NeverMind';
  font-size: ${() => variants[variant].size}px;
  font-weight: ${() => variants[variant].weight ?? '400'};
  line-height: ${() => variants[variant].lineHeight}px;
  ${color && `color: ${color};`}
`

export const Typography = styled.span`
  ${(props) => typography(props)}
`
