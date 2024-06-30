import styled from 'styled-components'
import { EventInfos } from './EventInfos/EventInfos'
import { EventContact } from './EventContact'

type CardInfosPropsType = {
    description: string,
    price: number | null,
    sheduleStart: string,
    sheduleEnd: string,
    meetingPlace: string,
    company: {
        name: string,
        logo: string,
        website: string,
        instagram: string,
        phone: string
    },
    planner: {
        name: string,
        img: string,
        description: string
    }
}

export const CardInfos = ({ description, sheduleStart, sheduleEnd, meetingPlace, price, planner, company }: CardInfosPropsType) => {
    return (
        <CardInfosStyled>
            <EventInfos
                description={description}
                sheduleStart={sheduleStart}
                sheduleEnd={sheduleEnd}
                meetingPlace={meetingPlace}
                price={price}
            />
            <EventContact
                planner={planner}
                company={company}
            />
        </CardInfosStyled>
    )
}

const CardInfosStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    background: #3E9B4F;
    color: #FFF;
    border-radius: 5px;
`;