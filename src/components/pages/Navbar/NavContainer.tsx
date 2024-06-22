import styled from "styled-components";
import { LogoContainer } from "../../ui/LogoContainer";
import { NavButton } from "./NavButton";
import { navButtonsConfig } from "./navButtonsConfig";

export const NavContainer = () => {

    const buttonsConfig = navButtonsConfig

    return (
        <NavContainerStyled>
            <LogoContainer />
            <div className="buttons-container">
                {buttonsConfig.map(button => (
                    <NavButton
                        key={button.id}
                        Icon={button.Icon}
                    />
                ))}
            </div>
        </NavContainerStyled>
    )
}

const NavContainerStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .buttons-container {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        padding-right: 5px;
    }
`;