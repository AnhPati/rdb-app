import styled from "styled-components";
import backgroundHero from "./../../../assets/hero-rdb.jpg";
import { LogoContainer } from "../../ui/LogoContainer";

const Hero = () => {
    return (
        <HeroStyled>
            <LogoContainer className={'logo-container'} />
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
        transform: scale(2.5);
        margin-left: 70px;

        .st0 {
            fill: #203C25;
        }

        .st1 {
            fill: #FFF;
        }

        h1 {
            color: #203C25;
        }

        sub {
            color: #2A7E3B;
        }
    }
`;