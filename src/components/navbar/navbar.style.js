import styled from "styled-components";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

export const NavContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 58px;
  background-color: ${theme.colors.midnightGreen};
`;

export const Navigator = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 1400px;
  @media (max-width: ${theme.bp.medium}) {
    gap: 15px;
  }
`;

export const BranchName = styled.h1`
display: flex;
align-items: center;
padding-top: 12px;
img{
  height: 34px;
}
`
export const BranchContainer = styled.div`
display: flex;
align-items: flex-start;
gap: 15px;
`
export const LinksSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  height: 100%;

  @media (max-width: ${theme.bp.medium}) {
    gap: 15px;
  }
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

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.colors.antiFlashWhite};
  text-decoration: none;
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

export const MenuButton = styled.button`
  border: none;
  color: ${theme.colors.antiFlashWhite};
  font-size: 40px;
  cursor: pointer;
  display: none;

  @media (max-width: ${theme.bp.medium}) {
    display: block;
  }

  @media (max-width: ${theme.bp["x-small"]}) {
    font-size: 30px;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding: 0 30px;
  justify-content: space-between;
`;

export const MobileSection = styled.div`
  @media (max-width: ${theme.bp.small}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 308px;
    left: 0;
    background-color: ${theme.colors.midnightGreen};
    width: 100%;
    padding: 10px;
    transform: ${({ showMenu }) =>
      showMenu ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;
