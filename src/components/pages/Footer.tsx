import styled from "styled-components";

const Footer = () => {
    return (
        <FooterStyled>
            <a href="">Descargar nuestro programa</a>
            <a href="">Hecho con ❤️ por AnhPati</a>
            <a href="">A cerca de la Ruta del Bienestar</a>
        </FooterStyled>
    )
}

export default Footer

const FooterStyled = styled.footer`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 10px;
    background: #3E9B4F;
`;