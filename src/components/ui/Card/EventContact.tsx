import { BsInstagram, BsPhone } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'
import styled from 'styled-components'

type EventContactPropsType = {
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

export const EventContact = ({ planner, company }: EventContactPropsType) => {
    return (
        <EventContactStyled>
            <div>
                <p>Facilita : {planner.name}</p>
            </div>
            <div>
                <a href={`tel:${company.phone}`}><BsPhone /> {company.phone}</a>
                {company.website.length > 0 && (
                    <a href={company.website}>
                        <TbWorld /> {company.name}
                    </a>
                )}
                {company.instagram.length > 0 && (
                    <a href={company.instagram}>
                        <BsInstagram /> {company.name}
                    </a>
                )}
            </div>
        </EventContactStyled>
    )
}


const EventContactStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
    gap: 10px;
    
    div {
        display: flex;
        justify-content: space-between;

        p {
            margin: 0;
            color: #fff;
            font-size: 12px;
            font-weight: 300;
            font-family: "Noto Serif", serif;
        }

        a {
            font-size: 12px;
            font-family: "Noto Serif", serif;
            font-weight: 300;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }
`;