import { BsFilePdf } from "react-icons/bs";
import styled from "styled-components";
import rdbProgram from "./../../assets/rdb-1-programmacion.jpeg"


const Footer = () => {
    return (
        <FooterStyled>
            <div>
                <a href={rdbProgram} download><BsFilePdf /> Descargar nuestro programa</a>
            </div>

            <p>
                Hecho con ❤️ por <a href="https://github.com/AnhPati">AnhPati</a>
            </p>
            {/* <a href="">A cerca de la Ruta del Bienestar</a> */}
        </FooterStyled>
    )
}

export default Footer

const FooterStyled = styled.footer`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    padding: 10px;
    background: #3E9B4F;
`;