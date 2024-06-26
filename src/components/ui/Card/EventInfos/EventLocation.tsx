import { FaMapLocationDot } from "react-icons/fa6";
import styled from "styled-components";

type EventLocationPropsType = {
    meetingPlace: string
}

export const EventLocation = ({ meetingPlace }: EventLocationPropsType) => {
    return (
        <EventLocationStyled>
            <FaMapLocationDot />{meetingPlace}
        </EventLocationStyled>
    )
}

const EventLocationStyled = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    text-align: center;
    font-weight: 300;

    svg {
        font-size: 20px;
    }
`;