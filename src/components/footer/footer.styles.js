import styled from "styled-components";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

export const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1440px;
  background-color: ${theme.colors.midnightGreen};
  padding: 0;
  margin: 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 400px;
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 100%;
  position: relative;
  border-right: 2px solid ${theme.colors.platinum};
`;

export const Shield = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 95px;
  height: 112px;
  z-index: 100;
  background-color: ${theme.colors.antiFlashWhite};
  clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%);

  img {
    margin-top: 15px;
    width: 55px;
  }
`;

export const BrandResume = styled.p`
  width: 80%;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.antiFlashWhite};
`;

export const Copyright = styled.span`
  width: 100%;
  border-top: 2px solid ${theme.colors.platinum};
  text-align: center;
  color: ${theme.colors.platinum};
  font-size: 12px;
  padding: 10px 0px;
`;

export const FooterNav = styled.div`
height: 400px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr 3fr 1fr; 
  gap: 0px 0px;
  grid-template-areas:
  ". . map"
    "navigation navigation map"
    ". . map"
    "contact contact map"
    ". . map";
  justify-items: stretch;
`;

export const FooterNavigator = styled.div`
  grid-area: navigation;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const NavTitle = styled.span`
  width: 90%;
  padding-left: 5%;
  display: flex;
  align-items: center;
  color: ${theme.colors.BurntSienna};
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.colors.antiFlashWhite};
  text-decoration: none;
  width: 30%;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  text-transform: uppercase;
  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    border-bottom: 2px solid ${theme.colors.BurntSienna};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;

export const FooterContact = styled.div`
  grid-area: contact;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ContactInfo = styled.p`
  display: flex;
  align-items: center;
  width: 90%;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.antiFlashWhite};
  span {
    color: ${theme.colors.BurntSienna};
    padding-right: 10px;
  }
`;

export const MapContainer = styled.div`
  grid-area: map;
  position: relative;
`;
export const MapOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.BurntSienna};
  opacity: 0.7;
`;
export const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
