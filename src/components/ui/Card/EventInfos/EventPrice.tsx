import styled from "styled-components";

type EventPricePropsType = {
    price: number | null
}

export const EventPrice = ({ price }: EventPricePropsType) => {
    return (
        <EventPriceStyled>
            {price !== null ? `Aporte ${price}.000$` : 'Evento gratis'}
        </EventPriceStyled>
    )
}

const EventPriceStyled = styled.p`
    font-size: 14px;
    font-weight: 300;
    text-align: center;
`;