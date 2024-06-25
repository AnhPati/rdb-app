import styled from "styled-components";

type EventDatePropsType = {
    month: string,
    date: string,
    day: string
}

export const EventDate = ({ month, date, day }: EventDatePropsType) => {
    return (
        <EventDateStyled>
            {month} {date}<br />
            <sub>{day}</sub>
        </EventDateStyled>
    )
}

const EventDateStyled = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    text-align: center;

    sub {
        font-weight: 500;
    }
`;