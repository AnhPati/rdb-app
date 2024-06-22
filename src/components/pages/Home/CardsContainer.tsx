import styled from 'styled-components'
import { users } from './../../../data/usersData'

const CardsContainer = () => {
    return (
        <CardsContainerStyled>
            {users.map(user => {
                return (
                    <section>
                        <div className='event-hero'>
                            <h2>{user.event.eventName}</h2>
                            <div className='img-container'>
                                <img src={user.event.eventImgs[0]} alt={user.event.eventName} />
                            </div>
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
        padding-left: 10px;
        padding-right: 10px;

        &:nth-child(even) {
            background: #F5FBF5;
        }

        .event-hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .img-container {
                border-radius: 50% 50% 0 0;
                overflow: hidden;

                img {
                    width: 100%;
                }
            }
        }
    }
`;