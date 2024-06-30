import styled from "styled-components";
import { EventDescription } from "./EventDescription";
import { EventDate } from "./EventDate";
import { EventLocation } from "./EventLocation";
import { EventShedules } from "./EventShedules";
import { EventPrice } from "./EventPrice";

type EventInfosPropsType = {
    description: string,
    price: number | null,
    sheduleStart: string,
    sheduleEnd: string,
    meetingPlace: string
}

export const EventInfos = ({ description, sheduleStart, sheduleEnd, meetingPlace, price }: EventInfosPropsType) => {

    const formatDate = (monthId: number, dateNumber: number, dayId: number) => {
        let newMonth = ''
        const newDate = String(dateNumber)
        let newDay = ''

        switch (monthId) {
            case 0:
                newMonth = 'Enero'
                break
            case 1:
                newMonth = 'Febrero'
                break
            case 2:
                newMonth = 'Marzo'
                break
            case 3:
                newMonth = 'Abril'
                break
            case 4:
                newMonth = 'Mayo'
                break
            case 5:
                newMonth = 'Junio'
                break
            case 6:
                newMonth = 'Julio'
                break
            case 7:
                newMonth = 'Agosto'
                break
            case 8:
                newMonth = 'Septiembre'
                break
            case 9:
                newMonth = 'Octubre'
                break
            case 10:
                newMonth = 'Noviembre'
                break
            case 11:
                newMonth = 'Diciembre'
                break
        }

        switch (dayId) {
            case 0:
                newDay = 'Domingo'
                break
            case 1:
                newDay = 'Lunes'
                break
            case 2:
                newDay = 'Martes'
                break
            case 3:
                newDay = 'Miércoles'
                break
            case 4:
                newDay = 'Jueves'
                break
            case 5:
                newDay = 'Viernes'
                break
            case 6:
                newDay = 'Sabado'
                break
        }

        return [newMonth, newDate, newDay]
    }

    const [month, date, day] = formatDate(new Date(sheduleStart).getMonth(), new Date(sheduleStart).getDate(), new Date(sheduleStart).getDay())

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
                    start={new Date(sheduleStart).toLocaleTimeString()}
                    end={new Date(sheduleEnd).toLocaleTimeString()}
                />
                <EventPrice
                    price={price}
                />
            </div>
        </EventInfosStyled>
    )
}

const EventInfosStyled = styled.div`
    width: 100%;
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