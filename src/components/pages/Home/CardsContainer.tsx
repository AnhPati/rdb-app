import styled from 'styled-components'
import { events } from '../../../data/eventsData'
import Card from '../../ui/Card/Card'

const CardsContainer = () => {
    const lastEventId = (events.length).toString()
    return (
        <CardsContainerStyled>
            <div id="card_list-top"></div>
            {events.map(event => {
                return (
                    <Card
                        key={event.id}
                        event={event}
                        id={event.id === lastEventId ? "card_list-bottom" : `card_list-${event.id}`}
                    />
                )
            })}
        </CardsContainerStyled>
    )
}

export default CardsContainer

const CardsContainerStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #card_list-top {
        position: absolute;
        top: -119px;
    }
`;