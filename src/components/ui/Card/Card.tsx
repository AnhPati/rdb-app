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
        sheduleStart: string,
        sheduleEnd: string,
        meetingPlace: string,
        company: {
            name: string,
            logo: string,
            website: string,
            instagram: string,
            phone: string
        },
        planner: {
            name: string,
            img: string,
            description: string
        }
    },
    id: string,
    className: string,
    isPasted: boolean
}

const Card = ({ event, id, className, isPasted }: EventPropsType) => {
    return (
        <CardStyled id={id} className={className}>
            {isPasted && (
                <div className='past-overlay'>
                    <h3>
                        Evento realisado
                    </h3>
                </div>
            )}
            <CardHero
                title={event.title}
                subtitle={event.subtitle}
                img={event.imgs[0]}
            />
            <CardInfos
                description={event.description}
                sheduleStart={event.sheduleStart}
                sheduleEnd={event.sheduleEnd}
                meetingPlace={event.meetingPlace}
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
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    .past-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, .5);
        z-index: 1;

        h3 {
            background: #FFF;
            color: #203C25;
            padding: 15px 20px;
            border: solid 2px #203C25;
            border-radius: 5px;
            rotate: -20deg;
            font-size: 24px;
            text-transform: uppercase;
        }
    }
`;