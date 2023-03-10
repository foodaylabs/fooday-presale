import styled from 'styled-components/macro'
import IconUrl from '../assets/checkbox.svg'

const StyledContainer = styled.div`
  position: relative;
  border: 1px solid #000000;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  min-width: 20px;
  box-sizing: border-box;

  ${({ checked }) => checked && `
    background: center / cover url(${IconUrl});
  `}
`

const StyledInput = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  position: absolute;
  inset: 0;
  opacity: 0;
`

export default function Checkbox({
  checked = false,
  disabled = false,
  onChange = () => {},
  className,
}) {
  return (
    <StyledContainer checked={checked} className={className}>
      <StyledInput disabled={disabled} onChange={onChange} />
    </StyledContainer>
  )
}