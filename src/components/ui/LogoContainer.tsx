import styled from "styled-components";

export const LogoContainer = () => {
  return (
    <LogoContainerStyled>
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
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-container {
      width: 80px;

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
          font-size: 72px;
          font-weight: 500;
          line-height: 0.9;

          span {
              font-size: 24px;
          }
      }

      sub {
          margin-top: 5px;
          font-family: "Noto Serif", serif;
          font-size: 18px;
          font-weight: 300;
      }
  }
`;