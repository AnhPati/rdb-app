import styled from "styled-components";
import backgroundHero from "./../../assets/hero-rdb.jpg"

const Hero = () => {
    return (
        <HeroStyled>
            <div className="logo-container">
                <div className="img-container">
                    <img src="/aguacate.svg" alt="Logo de la Ruta del Bienestar" />
                </div>
                <div className="logo-title-container">
                    <h1>Ruta <span>del Bienestar</span></h1>
                    <sub>- en Jardín -</sub>
                </div>
            </div>
        </HeroStyled>
    )
}

export default Hero

const HeroStyled = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(60deg, #F5FBF5, 85%, transparent),right url(${backgroundHero});

    .logo-container {
        width: 190px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .img-container {
            width: 80px;

            img {
                width: 100%;
            }
        }

        .logo-title-container {
            display: flex;
            flex-direction: column;
            align-items: center;

            h1 {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0;
                font-size: 72px;
                font-weight: 500;
                line-height: 0.9;

                span {
                    font-size: 24px;
                }
            }

            sub {
                margin-top: 5px;
                font-family: "Noto Serif", serif;
                font-size: 18px;
                font-weight: 300;
            }
        }
    }
`;