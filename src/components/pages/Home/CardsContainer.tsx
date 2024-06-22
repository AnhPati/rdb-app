import styled from 'styled-components'
import { users } from './../../../data/usersData'

const CardsContainer = () => {
    return (
        <CardsContainerStyled>
            {users.map(user => {
                return (
                    <section>
                        <div className='card-hero'>
                            <h2>{user.event.eventName}</h2>
                            <div className='img-container'>
                                <img src={user.event.eventImgs[0]} alt={user.event.eventName} />
                            </div>
                        </div>
                        <div className="card-infos">
                            <div className="event-infos">
                                <div className="infos-container">
                                    <p>{user.event.eventDescription}</p>
                                </div>
                                <div className="infos-container">
                                    <p>{user.event.eventDate}</p>
                                    <p>{user.event.meetingPlace}</p>
                                </div>
                                <div className="infos-container">
                                    <p>{user.event.eventTime}</p>
                                    <p>{user.event.price}.000 $</p>
                                </div>
                            </div>
                            <div className="event-contact">
                                <div>
                                    <p>Facilita : {user.planner.plannerName}</p>
                                </div>
                                <div>
                                    <a href={`tel:${user.planner.phone}`}>{user.planner.phone}</a>
                                    <a href={user.instagram}>{user.companyName}</a>
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

        &:nth-child(even) {
            background: #F5FBF5;
        }

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