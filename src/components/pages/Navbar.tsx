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
`;