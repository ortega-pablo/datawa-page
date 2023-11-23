import { useState } from "react";
import {
  LeftSection,
  MenuButton,
  NavContainer,
  NavLink,
  Navigator,
  RightSection,
  Shield,
  MobileMenu,
  MobileSection,
} from "./navbar.style";
import { useMediaQuery } from "react-responsive";
import theme from "../../styles/theme";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: theme.bp.small });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <NavContainer>
      {isMobile ? (
        <>
          <MobileMenu>
            <Shield>
              <img src="green-logo.png" alt="Logo Datawa" />
            </Shield>
            <MenuButton onClick={toggleMenu}>{showMenu ? "✕" : "☰"}</MenuButton>
          </MobileMenu>
          {showMenu && (
            <Navigator>
              <MobileSection>
                <NavLink>Inicio</NavLink>
                <NavLink>Productos</NavLink>
                <NavLink>Exclusivos</NavLink>
                <NavLink>Nosotros</NavLink>
                <NavLink>Contacto</NavLink>
                <NavLink>Pregutas</NavLink>
              </MobileSection>
            </Navigator>
          )}
        </>
      ) : (
        <>
          <Navigator>
            <LeftSection>
              <NavLink>Inicio</NavLink>
              <NavLink>Productos</NavLink>
              <NavLink>Exclusivos</NavLink>
            </LeftSection>
            <Shield>
              <img src="green-logo.png" alt="Logo Datawa" />
            </Shield>
            <RightSection>
              <NavLink>Nosotros</NavLink>
              <NavLink>Contacto</NavLink>
              <NavLink>Pregutas</NavLink>
            </RightSection>
          </Navigator>
        </>
      )}
    </NavContainer>
  );
};

export default Navbar;
