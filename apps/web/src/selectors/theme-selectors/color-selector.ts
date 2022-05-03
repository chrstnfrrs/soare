import { Theme } from "@emotion/react";

type SelectColor = (props: { theme: Theme, color?: string}) => string

const selectColor: SelectColor = (props) => {
    if (!props.color) {
        return props.theme.colors.text.primary
    }

    return props.theme.colors.text[props.color] ?? props.color
}

export default selectColor
