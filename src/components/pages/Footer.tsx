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
                Hecho con ❤️ por <a href="https://github.com/AnhPati" target="_blank">AnhPati</a>
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
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 10px;
    background: #3E9B4F;

    div {
        width: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        

        a {
            padding: 10px;
            border: solid 2px #2A7E3B;
            border-radius: 5px;
            background: #FBFEFB;
            max-width: 360px;
            color: #2A7E3B;
            font-family: "Noto Serif", serif;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            display: flex;
            text-decoration: none;

            svg {
                font-size: 25px;
            }
        }
    }

    p {
        margin: 0;
        color: #FFF;
        font-family: "Noto Serif", serif;
        font-size: 11px;

        a {
            color: #FFF;
        }
    }
`;