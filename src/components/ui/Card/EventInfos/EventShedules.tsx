import styled from "styled-components";

type EventShedulesPropsType = {
    start: string,
    end: string
}

export const EventShedules = ({ start, end }: EventShedulesPropsType) => {
    return (
        <EventShedulesStyled>
            Horario<br />
            <sub>{start.slice(0, 5)} - {end.slice(0, 5)}</sub>
        </EventShedulesStyled>
    )
}

const EventShedulesStyled = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`;