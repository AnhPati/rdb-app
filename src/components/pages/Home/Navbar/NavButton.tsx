import { ReactElement } from "react"
import styled from "styled-components"

type NavButtonPropsType = {
    onClick?: () => unknown,
    Icon: ReactElement,
    anchor: string
}

export const NavButton = ({ onClick, Icon, anchor }: NavButtonPropsType) => {
    return (
        <NavButtonStyled onClick={onClick} href={anchor}>
            {Icon}
        </NavButtonStyled>
    )
}

const NavButtonStyled = styled.a`
    padding: 10px;
    background: #3e9b4f;
    color: #FFF;
    border: solid 1px #FFF;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;

    &:hover {
        background: #FFF;
        color: #3e9b4f;
        cursor: pointer;
    }

    &:active {
        background: #3e9b4f;
        color: #FFF;
    }
`;