import { useState } from "react";
import {
  MenuButton,
  NavContainer,
  NavLink,
  Navigator,
  Shield,
  MobileMenu,
  MobileSection,
  BranchName,
  BranchContainer,
  LinksSection,
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
            <BranchContainer>
              <Shield>
                <img src="green-logo.png" alt="Logo Datawa" />
              </Shield>
              <BranchName>
                <img src="../../../public/white-branch.png" alt="" />
              </BranchName>
            </BranchContainer>
            <LinksSection>
              <NavLink>Productos</NavLink>
              <NavLink>Exclusivos</NavLink>
              <NavLink>Nosotros</NavLink>
              <NavLink>Contacto</NavLink>
              <NavLink>Pregutas</NavLink>
            </LinksSection>
          </Navigator>
        </>
      )}
    </NavContainer>
  );
};

export default Navbar;
