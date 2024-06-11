import styled from "styled-components";
import { LogoContainer } from "../ui/LogoContainer";
import { LuArrowDown, LuArrowDownToLine, LuArrowUp, LuArrowUpToLine } from "react-icons/lu";

const Navbar = () => {
    return (
        <NavbarStyled>
            <div className="nav-container">
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
            </div>
            <div>
                SortContainer
            </div>
        </NavbarStyled>
    )
}

export default Navbar

const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  bottom: 0;
  top: -60px;
  z-index: 1;
  padding: 10px 10px;
  background: #3e9b4f;
  color: #FFF;

  .nav-container {
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
  }
`;