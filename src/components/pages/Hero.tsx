import styled from "styled-components";
import backgroundHero from "./../../assets/hero-rdb.jpg";
import { LogoContainer } from "./../ui/LogoContainer";

const Hero = () => {
    return (
        <HeroStyled>
            <LogoContainer />
        </HeroStyled>
    )
}

export default Hero

const HeroStyled = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(60deg, #F5FBF5, 85%, transparent),right url(${backgroundHero});
`;