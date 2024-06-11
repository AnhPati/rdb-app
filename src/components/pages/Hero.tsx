import styled from "styled-components";

const Hero = () => {
    return (
        <HeroStyled>
            <div className="logo-container">
                <div className="img-container">
                    <img src="/aguacate.svg" alt="Logo de la Ruta del Bienestar" />
                </div>
                <div className="logo-title-container">
                    <h1>Ruta <span>del Bienestar</span></h1>
                    <sub>- Jardin -</sub>
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

                span {
                    font-size: 24px;
                }
            }

            sub {
                font-size: 18px;
            }
        }
    }
`;