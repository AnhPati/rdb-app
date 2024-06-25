import styled from "styled-components";

type EventInfosPropsType = {
    description: string,
    price: number | null,
    month: string,
    date: string,
    day: string,
    shedules: string,
    meetingPlace: string
}

export const EventInfos = ({ description, month, date, day, meetingPlace, shedules, price }: EventInfosPropsType) => {
    return (
        <EventInfosStyled>
            <div className="infos-container">
                <p className='event-description'>
                    {description}
                </p>
            </div>
            <div className="infos-container">
                <h3 className='event-date'>
                    {month} {date}<br />
                    <sub>{day}</sub>
                </h3>
                <p className='event-location'>
                    {meetingPlace}
                </p>
            </div>
            <div className="infos-container">
                <h3 className='event-schedules'>
                    Horario<br />
                    <sub>{shedules}</sub>
                </h3>
                {price !== 0 && (
                    <p className='event-price'>
                        {price !== null ? `Aporte ${price}.000$` : 'Evento gratis'}
                    </p>
                )}
            </div>
        </EventInfosStyled>
    )
}

const EventInfosStyled = styled.div`
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
`;