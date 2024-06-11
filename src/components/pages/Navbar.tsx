import styled from "styled-components";

const Navbar = () => {
    return (
        <NavbarStyled>
            <div>
                NavContainer
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