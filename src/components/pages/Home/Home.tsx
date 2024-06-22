import styled from "styled-components"
import Hero from "./Hero"
import Navbar from "./Navbar/Navbar"
import CardsContainer from "./CardsContainer"

const Home = () => {
    return (
        <HomeStyled>
            <Hero />
            <Navbar />
            <CardsContainer />
        </HomeStyled>
    )
}

export default Home

const HomeStyled = styled.div`
  position: relative;
`;