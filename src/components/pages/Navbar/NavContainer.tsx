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
        justify-content: space-around;

        button {
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
        }
    }
`;