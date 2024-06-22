import styled from 'styled-components'
import { users } from './../../../data/usersData'

const CardsContainer = () => {
    return (
        <CardsContainerStyled>
            {users.map(user => {
                return (
                    <section>
                        <h2>{user.event.eventName}</h2>
                        <img src={user.event.eventImgs[0]} alt={user.event.eventName} />
                    </section>
                )
            })}
        </CardsContainerStyled>
    )
}

export default CardsContainer

const CardsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;