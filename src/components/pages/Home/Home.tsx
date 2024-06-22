import styled from "styled-components"
import Hero from "./Hero"
import Navbar from "./Navbar/Navbar"

const Home = () => {
    return (
        <HomeStyled>
            <Hero />
            <Navbar />
        </HomeStyled>
    )
}

export default Home

const HomeStyled = styled.div`
  position: relative;
`;