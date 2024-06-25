import styled from "styled-components";

type EventShedulesPropsType = {
    shedules: string
}

export const EventShedules = ({ shedules }: EventShedulesPropsType) => {
    return (
        <EventShedulesStyled>
            Horario<br />
            <sub>{shedules}</sub>
        </EventShedulesStyled>
    )
}

const EventShedulesStyled = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`;