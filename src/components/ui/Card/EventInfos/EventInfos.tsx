import styled from "styled-components";
import { EventDescription } from "./EventDescription";
import { EventDate } from "./EventDate";
import { EventLocation } from "./EventLocation";
import { EventShedules } from "./EventShedules";
import { EventPrice } from "./EventPrice";

type EventInfosPropsType = {
    description: string,
    price: number | null,
    month: string,
    date: string,
    day: string,
    shedules: string,
    meetingPlace: string
}

export const EventInfos = ({ description, month, date, day, meetingPlace, shedules, price }: EventInfosPropsType) => {
    return (
        <EventInfosStyled>
            <div className="infos-container">
                <EventDescription
                    description={description}
                />
            </div>
            <div className="infos-container">
                <EventDate
                    month={month}
                    date={date}
                    day={day}
                />
                <EventLocation
                    meetingPlace={meetingPlace}
                />
            </div>
            <div className="infos-container">
                <EventShedules
                    shedules={shedules}
                />
                <EventPrice
                    price={price}
                />
            </div>
        </EventInfosStyled>
    )
}

const EventInfosStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .infos-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding: 0 10px;

        &:nth-child(2) {
            border-left: solid 1px #E9F6E9;
            border-right: solid 1px #E9F6E9;
        }

        p {
            margin: 0;
            font-family: "Noto Serif", serif;
        }
    }
`;