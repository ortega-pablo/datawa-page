import styled from "styled-components";
import theme from "../../../styles/theme";

export const ProductsSectionContainer = styled.section`
  width: 1440px;
  height: 1650px;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-image: url("../../../../../public/texture/wood2.svg");
  background-size: 700px 380px;
  background-position: 0 0;
  background-attachment: fixed;
  background-repeat: no-repeat;

  background-color: ${theme.colors.platinum};
`;

export const BannerProducts = styled.div`
display: flex;
width: 1200px;
position: relative;
justify-content: space-between;
` 


export const TextContainer = styled.div`
  width: 500px;
  height: 400px;
  position: relative;
  left: 0px;
  top: 100px;

`;

export const TextContent = styled.div`
  color: ${theme.colors.richBlack};
  position: absolute;
  top: 0;
  left: 0;
`;
export const TextName = styled.h2`
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 6px;
`;
export const TextTitle = styled.h3`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 45px;
  margin: 10px 0;
`;
export const TextResume = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const PositionBTN = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  
`;

export const Square = styled.div`
  height: 76px;
  width: 76px;
  background-color: ${theme.colors.BurntSienna};
  position: absolute;
  top: 35px;
  left: -35px;
  z-index: -1;
`;

export const VerticalBar = styled.div`
  border-left: 4px solid ${theme.colors.BurntSienna};
  position: absolute;
  height: 120px;
  right: 0px;
  top: 100px;
`
export const FlexProducts = styled.div`
display: flex;
width: 1200px;
height: 1000px;
flex-wrap: wrap;
align-items: space-between;
justify-content: space-between;
margin-top: 130px;
`