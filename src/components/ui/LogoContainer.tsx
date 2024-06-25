import styled from "styled-components";
import { Logo } from "./Logo";

type LogoPropsType = {
  className?: string
}

export const LogoContainer = ({ className }: LogoPropsType) => {
  return (
    <LogoContainerStyled className={className}>
      <Logo />
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