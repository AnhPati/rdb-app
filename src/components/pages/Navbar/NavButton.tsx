import { ReactElement } from "react"
import styled from "styled-components"

type NavButtonPropsType = {
    onClick?: () => unknown,
    Icon: ReactElement
}

export const NavButton = ({ onClick, Icon }: NavButtonPropsType) => {
    return (
        <NavButtonStyled onClick={onClick}>
            {Icon}
        </NavButtonStyled>
    )
}

const NavButtonStyled = styled.button`
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