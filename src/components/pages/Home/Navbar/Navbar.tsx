import styled from "styled-components";
import { NavContainer } from "./NavContainer";

const Navbar = () => {
    return (
        <NavbarStyled>
            <NavContainer />
            {/* <div>
                SortContainer
            </div> */}
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
  top: 0;
  z-index: 10;
  padding: 10px 10px;
  background: #3e9b4f;
  color: #FFF;
`;