import styled from "styled-components";
import theme from "../../../styles/theme";

export const OurHistoryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  width: 1440px;
  height: 640px;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 610px;
  margin-left: 120px;
`;

export const IMG1 = styled.img`
position: absolute;
top: 90px;
left: 0;
height: 400px;
`
export const IMG2 = styled.img`
position: absolute;
top: 150px;
left: 310px;
height: 400px;
`
export const TextContainer = styled.div`
width: 500px;
height: 400px;
position: relative;
margin-right: 120px;
`

export const TextContent = styled.div`
color: ${theme.colors.richBlack};
position: absolute;
top: 0;
left: 35px;
`
export const TextName = styled.h2`
font-size: 20px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 6px;
`
export const TextTitle = styled.h3`
font-size: 40px;
text-transform: uppercase;
font-weight: 700;
line-height: 45px;
margin: 10px 0;
`
export const TextResume = styled.p`
font-size: 16px;
font-weight: 400;
`

export const PositionBTN = styled.div`
position: absolute;
left: 35px;
bottom: 50px;
`

export const Square = styled.div`
height: 76px;
width: 76px;
background-color: ${theme.colors.BurntSienna};
position: absolute;
top: 35px;
z-index: -1;
`