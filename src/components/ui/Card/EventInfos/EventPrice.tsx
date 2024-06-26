import { GiPayMoney } from "react-icons/gi";
import { IoTicket } from "react-icons/io5";
import { TbFreeRights } from "react-icons/tb";
import styled from "styled-components";

type EventPricePropsType = {
    price: number | null
}

export const EventPrice = ({ price }: EventPricePropsType) => {
    return (
        <EventPriceStyled>
            {price === null ? (
                <>
                    <TbFreeRights />
                    {'Evento gratis'}
                </>
            ) : price > 0 ? (
                <>
                    <IoTicket />
                    {`Aporte ${price}.000$`}
                </>
            ) : (
                <>
                    <GiPayMoney />
                    {'Aporte voluntario'}
                </>
            )}
        </EventPriceStyled>
    )
}

const EventPriceStyled = styled.p`
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