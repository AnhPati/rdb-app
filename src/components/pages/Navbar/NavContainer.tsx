import styled from "styled-components";
import { LogoContainer } from "../../ui/LogoContainer";
import { LuArrowDown, LuArrowDownToLine, LuArrowUp, LuArrowUpToLine } from "react-icons/lu";

export const NavContainer = () => {
    return (
        <NavContainerStyled>
            <LogoContainer />
            <div className="buttons-container">
                <button>
                    <LuArrowDownToLine />
                </button>
                <button>
                    <LuArrowDown />
                </button>
                <button>
                    <LuArrowUp />
                </button>
                <button>
                    <LuArrowUpToLine />
                </button>
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