import styled from 'styled-components'
import { users } from './../../../data/usersData'
import { BsInstagram, BsPhone } from 'react-icons/bs'

const CardsContainer = () => {
    return (
        <CardsContainerStyled>
            {users.map(user => {
                return (
                    <section>
                        <div className='card-hero'>
                            <h2>
                                {user.event.title}<br />
                                <sub>{user.event.subtitle}</sub>
                            </h2>
                            <div className='img-container'>
                                <img src={user.event.imgs[0]} alt={user.event.title} />
                            </div>
                        </div>
                        <div className="card-infos">
                            <div className="event-infos">
                                <div className="infos-container">
                                    <p className='event-description'>
                                        {user.event.description}
                                    </p>
                                </div>
                                <div className="infos-container">
                                    <h3 className='event-date'>
                                        {user.event.month} {user.event.date}<br />
                                        <sub>{user.event.day}</sub>
                                    </h3>
                                    <p className='event-location'>
                                        {user.event.meetingPlace}
                                    </p>
                                </div>
                                <div className="infos-container">
                                    <h4 className='event-schedules'>
                                        Horario<br />
                                        {user.event.shedules}
                                    </h4>
                                    <p className='event-price'>Aporte {user.event.price}.000 $</p>
                                </div>
                            </div>
                            <div className="event-contact">
                                <div>
                                    <p>Facilita : {user.planner.name}</p>
                                </div>
                                <div>
                                    <a href={`tel:${user.planner.phone}`}><BsPhone /> {user.planner.phone}</a>
                                    <a href={user.instagram}><BsInstagram /> {user.company.name}</a>
                                </div>
                            </div>
                        </div>
                        <div className='available_places-container'>
                            {user.event.availablePlaces} cupos
                        </div>
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

    section {
        position: relative;
        max-width: 900px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #E9F6E9;
        padding: 10px;

        .card-hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px;
            padding: 20px;

            h2 {
                margin: 0;
                font-size: 30px;
                color: #203C25;
            }

            .img-container {
                border-radius: 50% 50% 0 0;
                overflow: hidden;

                img {
                    width: 100%;
                }
            }
        }

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
                    padding: 5px;

                    p {
                        margin: 0;
                        font-family: "Noto Serif", serif;
                    }

                    .event-description {
                        font-size: 12px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-weight: 300;
                    }

                    .event-date {
                        margin: 0;
                        font-size: 16px;
                        text-align: center;
                    }

                    .event-location {
                        font-size: 14px;
                        text-align: center;
                        font-weight: 300;
                    }

                    .event-schedules {
                        margin: 0;
                        font-size: 16px;
                        text-align: center;
                    }

                    .event-price {
                        font-size: 16px;
                        font-weight: 400;
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
    }
`;