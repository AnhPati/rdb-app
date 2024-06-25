import styled from "styled-components";

type EventDescriptionPropsType = {
    description: string
}

export const EventDescription = ({ description }: EventDescriptionPropsType) => {
    return (
        <EventDescriptionStyled>
            {description}
        </EventDescriptionStyled>
    )
}

const EventDescriptionStyled = styled.p`
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 200;
`;