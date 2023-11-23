import styled from "styled-components";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

export const ButtonContainer = styled(Link)`
width: 200px;
height: fit-content;
display: flex;
align-items: center;
justify-content: center;
padding: 12px;
font-size: ${theme.fontSize.xl.text.small};
text-decoration: none;
color: ${theme.colors.antiFlashWhite};
font-size: ${theme.fontSize.xl.text.small};
font-weight: 600;
background-color: ${theme.colors.BurntSienna};
border-radius: 4px;
text-transform: uppercase;


`