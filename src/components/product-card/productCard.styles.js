import styled from "styled-components";
import theme from "../../styles/theme";


export const CardContainer = styled.div`
width: 280px;
height: 480px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
background-color: white;
`

export const ProductImage = styled.img`
width: 260px;
height: 260px;
`
export const TextContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2px;
`

export const NamePrice = styled.div`
display: flex;
width: 260px;
justify-content: space-between;
font-size: 20px;
font-weight: 600;
color: ${theme.colors.richBlack};
`

export const ProductCategory = styled.span`
width: 260px;
color: ${theme.colors.BurntSienna};
text-transform: uppercase;
font-size: 14px;
font-weight: 500;
`

export const ProductBTN = styled.div `

`