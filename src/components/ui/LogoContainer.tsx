import styled from "styled-components";

type LogoPropsType = {
  className?: string
}

export const LogoContainer = ({ className }: LogoPropsType) => {
  return (
    <LogoContainerStyled className={className}>
      <div className="img-container">
        <img src="/aguacate.svg" alt="Logo de la Ruta del Bienestar" />
      </div>
      <div className="logo-title-container">
        <h1>Ruta <span>del Bienestar</span></h1>
        <sub>- en Jardín -</sub>
      </div>
    </LogoContainerStyled>
  )
}

const LogoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-container {
      width: 30px;

      img {
          width: 100%;
      }
  }

  .logo-title-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0;
          font-size: 24px;
          font-weight: 500;
          line-height: 0.9;

          span {
              font-size: 10px;
          }
      }

      sub {
          margin-top: 2px;
          font-family: "Noto Serif", serif;
          font-size: 8px;
          font-weight: 300;
      }
  }
`;