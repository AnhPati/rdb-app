import styled from 'styled-components'
import { EventInfos } from './EventInfos/EventInfos'
import { EventContact } from './EventContact'

type CardInfosPropsType = {
    description: string,
    price: number | null,
    month: string,
    date: string,
    day: string,
    shedules: string,
    meetingPlace: string,
    company: {
        name: string,
        logo: string,
        instagram: string,
        phone: string
    },
    planner: {
        name: string,
        img: string,
        description: string
    }
}

export const CardInfos = ({ description, month, date, day, meetingPlace, shedules, price, planner, company }: CardInfosPropsType) => {
    return (
        <CardInfosStyled>
            <EventInfos
                description={description}
                month={month}
                date={date}
                day={day}
                shedules={shedules}
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