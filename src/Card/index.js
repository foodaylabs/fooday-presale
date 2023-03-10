import React, { forwardRef } from 'react'
import styled from 'styled-components/macro'

const StyledContainer = styled.section`
    border: 1px #000 solid;
    border-radius: 20px;
    width: 100%;
`

const StyledHeader = styled.header`
    display: flex;
    border-bottom: 1px #000 solid;
    text-align: center;
    overflow: hidden;
    border-radius: 20px 20px 0 0;

    &:last-child {
        border: none;
    }
`

const StyledContent = styled.div`
    padding: 40px;
    @media (max-width: 768px) {
        padding: 30px;
    }
`

export default forwardRef(function Card({ head, children, className } = {}, ref) {
    return (
        <StyledContainer ref={ref} className={className}>
            {head && (
                <StyledHeader>{head}</StyledHeader>
            )}
            {children && (
                <StyledContent>{children}</StyledContent>
            )}
        </StyledContainer>
    )
})