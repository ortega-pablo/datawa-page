import styled from "styled-components";
import theme from "../../../styles/theme";

export const ServicesSectionContainer = styled.section`
  width: 1440px;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${theme.colors.midnightGreen};
`;

export const ServiceCard = styled.div`
  position: relative;
  width: 22%;
  height: 90px;
  color: ${theme.colors.antiFlashWhite};
  text-align: left;
`;

export const CardTitle = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: 0;
  left: 55px;
`;

export const CardResume = styled.p`
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  top: 35px;
  left: 55px;
`;

export const CardIcon = styled.div`
  font-size: 40px;
  color: ${theme.colors.BurntSienna};
  position: absolute;
  top: 5;
  left: 0;
`;
