import { ReactElement } from "react"

type NavButtonPropsType = {
    onClick?: () => unknown,
    Icon: ReactElement
}

export const NavButton = ({ onClick, Icon }: NavButtonPropsType) => {
    return (
        <button onClick={onClick}>
            {Icon}
        </button>
    )
}