import styled from "styled-components";
import theme from "../../../styles/theme";

export const BannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
`;

export const Hero = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 1440px;
  position: relative;
  color: ${theme.colors.antiFlashWhite};
`;
export const Texture = styled.div`
  width: 35%;
  background-color: ${theme.colors.richBlack};
  background-image: url("/texture/wood.png");
  background-size: cover;

  @media (max-width: ${theme.bp.small}) {
    display: none;
  }
`;

export const IMG = styled.div`
  width: 65%;
  height: 640px;
  background-image: url("../../../../../public/photos/zoomBarraMadera.jpg");
  background-size: 100%;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
export const TextContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 120px;
  width: 560px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.div`
  font-size: ${theme.fontSize.xl.title.high};
`;

export const Bar = styled.div`
  width: 120px;
  border-bottom: 4px solid ${theme.colors.BurntSienna};
`;

export const Resume = styled.div`
  margin-bottom: 40px;
`;
