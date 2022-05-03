import styled from "@emotion/styled";

type RowProps = {
    align?: string
    gap?: string
    justify?: string
}

const Row = styled.div<RowProps>`
    display: flex;
    width: 100%;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    gap: ${props => `${props.gap ? `${props.gap}rem` : ''}`};
`

export default Row
