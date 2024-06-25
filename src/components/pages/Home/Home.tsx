import styled from "styled-components"
import Hero from "./Hero"
import Navbar from "./Navbar/Navbar"
import CardsContainer from "./CardsContainer"
import Footer from "../Footer"

const Home = () => {
    return (
        <HomeStyled>
            <Hero />
            <Navbar />
            <CardsContainer />
            <Footer />
        </HomeStyled>
    )
}

export default Home

const HomeStyled = styled.div`
  position: relative;
`;