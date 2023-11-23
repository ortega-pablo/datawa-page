import styled from "styled-components";
import theme from "../../../styles/theme";

export const CustomizedSectionContainer = styled.section`
  width: 1440px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.platinum};
`;

export const CustomizedSectionContent = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  height: 400px;
  width: 500px;
  position: relative;
`;

export const TextName = styled.h2`
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: ${theme.colors.BurntSienna};
  position: absolute;
  top: 0;
  left: 38px;
`;
export const TextTitle = styled.h3`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 45px;
  position: absolute;
  top: 40px;
  left: 38px;
  z-index: 1;
`;
export const TextResume = styled.p`
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  top: 200px;
  left: 38px;
`;

export const PositionBTN = styled.div`
  position: absolute;
  left: 38px;
  top: 300px;
`;

export const Square = styled.div`
  height: 76px;
  width: 76px;
  background-color: ${theme.colors.BurntSienna};
  position: absolute;
  top: 30px;
  left: 0;
`;
export const Bar = styled.div`
  width: 100px;
  border-bottom: 4px solid ${theme.colors.BurntSienna};
  position: absolute;
  top: 160px;
  left: 38px;
`;

export const ImagesContainer = styled.div`
  width: 600px;
  height: 500px;
  position: relative;
`;

export const IMG1 = styled.img`
height: 200px;
position: absolute;
top: 0;
left: 80px;
`
export const IMG2 = styled.img`
height: 200px;
position: absolute;
top: 210px;
left: 0;
`
