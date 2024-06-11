import styled from "styled-components";
import { LogoContainer } from "../ui/LogoContainer";

const Navbar = () => {
    return (
        <NavbarStyled>
            <div className="nav-container">
                <LogoContainer />
                <div className="buttons-container">
                    <button>
                        Up !!
                    </button>
                    <button>
                        Up
                    </button>
                    <button>
                        Down
                    </button>
                    <button>
                        Down !!
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
`;