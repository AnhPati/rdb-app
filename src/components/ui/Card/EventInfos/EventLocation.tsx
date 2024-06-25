import styled from "styled-components";

type EventLocationPropsType = {
    meetingPlace: string
}

export const EventLocation = ({ meetingPlace }: EventLocationPropsType) => {
    return (
        <EventLocationStyled>
            {meetingPlace}
        </EventLocationStyled>
    )
}

const EventLocationStyled = styled.p`
    font-size: 14px;
    text-align: center;
    font-weight: 300;
`;