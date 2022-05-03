import styled from "@emotion/styled";

type ColProps = {
    align?: string
    gap?: string
    justify?: string
}

const Col = styled.div<ColProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    gap: ${props => `${props.gap ? `${props.gap}rem` : ''}`};
`

export default Col
