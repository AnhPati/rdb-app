import styled from 'styled-components'
import { events } from '../../../data/eventsData'
import Card from '../../ui/Card/Card'

const CardsContainer = () => {
    return (
        <CardsContainerStyled>
            {events.map(event => {
                return (
                    <Card
                        key={event.id}
                        event={event}
                    />
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