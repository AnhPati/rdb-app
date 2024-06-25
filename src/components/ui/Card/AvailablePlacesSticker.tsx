import styled from "styled-components";

type AvailablePlacesPropsType = {
    availablePlaces: number
}

export const AvailablePlacesSticker = ({ availablePlaces }: AvailablePlacesPropsType) => {
    return (
        <AvailablePlacesStickerStyled>
            {availablePlaces} cupos
        </AvailablePlacesStickerStyled>
    )
}

const AvailablePlacesStickerStyled = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3E9B4F;
    color: #FFF;
    font-family: "Noto Serif", serif;;
    font-size: 9px;
    font-weight: 700;
    border-radius: 50%;
`;