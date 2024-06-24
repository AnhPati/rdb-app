import styled from "styled-components";

type CardHeroPropsType = {
    title: string,
    subtitle: string,
    img: string
}

export const CardHero = ({ title, subtitle, img }: CardHeroPropsType) => {
    return (
        <CardHeroStyled>
            <h2>
                {title}<br />
                <sub>{subtitle}</sub>
            </h2>
            <div className='img-container'>
                <img src={img} alt={title} />
            </div>
        </CardHeroStyled>
    )
}

const CardHeroStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 20px;

    h2 {
        display: flex;
        flex-direction: column;
        margin: 0;
        color: #203C25;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;

        sub {
            font-size: 14px;
            font-weight: 400px;
            text-transform: capitalize;
        }
    }

    .img-container {
        border-radius: 50% 50% 0 0;
        overflow: hidden;

        img {
            width: 100%;
        }
    }
`;