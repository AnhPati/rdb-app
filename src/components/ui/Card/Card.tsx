import styled from 'styled-components'
import { CardHero } from './CardHero'
import { CardInfos } from './CardInfos'
import { AvailablePlacesSticker } from './AvailablePlacesSticker'

type EventPropsType = {
    event: {
        id: string,
        title: string,
        subtitle: string,
        description: string,
        imgs: string[],
        availablePlaces: number,
        price: number | null,
        month: string,
        date: string,
        day: string,
        shedules: string,
        meetingPlace: string,
        company: {
            name: string,
            logo: string,
            instagram: string,
            phone: string
        },
        planner: {
            name: string,
            img: string,
            description: string
        }
    }
}

const Card = ({ event }: EventPropsType) => {
    return (
        <CardStyled>
            <CardHero
                title={event.title}
                subtitle={event.subtitle}
                img={event.imgs[0]}
            />
            <CardInfos
                description={event.description}
                month={event.month}
                date={event.date}
                day={event.day}
                meetingPlace={event.meetingPlace}
                shedules={event.shedules}
                price={event.price}
                planner={event.planner}
                company={event.company}
            />
            {event.availablePlaces !== Infinity && (
                <AvailablePlacesSticker
                    availablePlaces={event.availablePlaces}
                />
            )}
        </CardStyled>
    )
}

export default Card

const CardStyled = styled.section`
    position: relative;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #E9F6E9;
    padding: 10px;
`;