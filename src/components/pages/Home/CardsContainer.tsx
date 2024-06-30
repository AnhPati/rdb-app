import styled from 'styled-components'
import { events } from '../../../data/eventsData'
import Card from '../../ui/Card/Card'

const CardsContainer = () => {
    const lastEventId = (events.length).toString()
    const dateNow = new Date()
    return (
        <CardsContainerStyled>
            <div id="card_list-top"></div>
            {events.map(event => {
                const isPastedEvent = new Date(event.sheduleEnd) < dateNow

                return (
                    <Card
                        key={event.id}
                        className={isPastedEvent ? 'past-event' : ''}
                        isPasted={isPastedEvent}
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
    background: #E9F6E9;

    #card_list-top {
        position: absolute;
        top: -119px;
    }

    .past-event {
        order: 1;
    }
`;