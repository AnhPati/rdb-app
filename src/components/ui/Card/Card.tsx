
import { BsInstagram, BsPhone } from 'react-icons/bs'
import styled from 'styled-components'
import { CardHero } from './CardHero'

type EventPropsType = {
    event: {
        id: string,
        title: string,
        subtitle: string,
        description: string,
        imgs: string[],
        availablePlaces: number,
        price: number,
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
            <div className="card-infos">
                <div className="event-infos">
                    <div className="infos-container">
                        <p className='event-description'>
                            {event.description}
                        </p>
                    </div>
                    <div className="infos-container">
                        <h3 className='event-date'>
                            {event.month} {event.date}<br />
                            <sub>{event.day}</sub>
                        </h3>
                        <p className='event-location'>
                            {event.meetingPlace}
                        </p>
                    </div>
                    <div className="infos-container">
                        <h3 className='event-schedules'>
                            Horario<br />
                            <sub>{event.shedules}</sub>
                        </h3>
                        {event.price !== 0 && (
                            <p className='event-price'>
                                {event.price !== null ? `Aporte ${event.price}.000$` : 'Evento gratis'}
                            </p>
                        )}
                    </div>
                </div>
                <div className="event-contact">
                    <div>
                        <p>Facilita : {event.planner.name}</p>
                    </div>
                    <div>
                        <a href={`tel:${event.company.phone}`}><BsPhone /> {event.company.phone}</a>
                        <a href={event.company.instagram}><BsInstagram /> {event.company.name}</a>
                    </div>
                </div>
            </div>
            {event.availablePlaces !== Infinity && (
                <div className='available_places-container'>
                    {event.availablePlaces} cupos
                </div>
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

    .card-infos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 10px 0;
        background: #3E9B4F;
        color: #FFF;
        border-radius: 5px;

        .event-infos {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;

            .infos-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                padding: 0 10px;

                &:nth-child(2) {
                    border-left: solid 1px #E9F6E9;
                    border-right: solid 1px #E9F6E9;
                }

                p {
                    margin: 0;
                    font-family: "Noto Serif", serif;
                }

                .event-description {
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-weight: 200;
                }

                .event-date {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                    text-align: center;

                    sub {
                        font-weight: 500;
                    }
                }

                .event-location {
                    font-size: 14px;
                    text-align: center;
                    font-weight: 300;
                }

                .event-schedules {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                    text-align: center;
                }

                .event-price {
                    font-size: 14px;
                    font-weight: 300;
                    text-align: center;
                }
            }
        }

        .event-contact {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 0 10px;
            gap: 10px;
            
            div {
                display: flex;
                justify-content: space-between;

                p {
                    margin: 0;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 300;
                    font-family: "Noto Serif", serif;
                }

                a {
                    font-size: 12px;
                    font-family: "Noto Serif", serif;
                    font-weight: 300;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            }
        }
    }

    .available_places-container {
        position: absolute;
        top: 10px;
        right: 10px;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #3E9B4F;
        color: #FFF;
        font-family: "Noto Serif", serif;;
        font-size: 9px;
        font-weight: 700;
        border-radius: 50%;
    }
`;