import styled from "styled-components";
import theme from "../../../styles/theme";
import { Link } from "react-router-dom";

export const CategoriesContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1440px;
  height: 180px;
  background-color: ${theme.colors.cadetGray};
  :hover{
    background-color: ${theme.colors.midnightGreen};
    color: ${theme.colors.antiFlashWhite}
  }
`;
export const CategoryButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 25%;
  height: 100%;
  text-decoration: none;
  color: ${theme.colors.richBlack};
  span {
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
  }
  
`;
export const Bar = styled.span`
height: 100%;
border-left: 1px solid ${theme.colors.midnightGreen};
`
