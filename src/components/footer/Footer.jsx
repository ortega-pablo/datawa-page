import {
  BrandResume,
  ContactInfo,
  Copyright,
  FooterBrand,
  FooterContact,
  FooterContainer,
  FooterNav,
  FooterNavigator,
  FooterSection,
  MapContainer,
  MapFrame,
  MapOverlay,
  NavLink,
  NavTitle,
  Shield,
} from "./footer.styles";

function Footer() {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterBrand>
          <Shield>
            <img src="green-logo.png" alt="Logo Datawa" />
          </Shield>
          <BrandResume>
            ¡Descubre la magia de nuestros muebles de autor y unite a un
            movimiento único en el mundo del diseño y la decoración! En Datawa
            creamos piezas que van mas allá de lo convencional transformando tus
            espacios en obras de arte vivientes.
          </BrandResume>
          <Copyright>
            Copyright © 2023 Datawa. Todos los derechos reservados.
          </Copyright>
        </FooterBrand>
        <FooterNav>
          <FooterNavigator>
            <NavTitle>Navegación</NavTitle>
            <NavLink>Inicio</NavLink>
            <NavLink>Productos</NavLink>
            <NavLink>Exclusivos</NavLink>
            <NavLink>Nosotros</NavLink>
            <NavLink>Contacto</NavLink>
            <NavLink>Pregutas</NavLink>
          </FooterNavigator>
          <FooterContact>
            <NavTitle>Contacto</NavTitle>
            <ContactInfo>
              <span>D: </span>
              Dorrego 5519, M5519 Mendoza
            </ContactInfo>
            <ContactInfo>
              <span>E:</span>
              datawa@gmail.com
            </ContactInfo>
            <ContactInfo>
              <span>T: </span>
              +54 261 0000000
            </ContactInfo>
          </FooterContact>
          <MapContainer>
            <MapOverlay />
            <MapFrame
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d837.2683476256137!2d-68.83418994707475!3d-32.92265917210202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1700529811945!5m2!1ses-419!2sar"
              allowfullscreen=""
              loading="lazy"
            />
          </MapContainer>
        </FooterNav>
      </FooterContainer>
    </FooterSection>
  );
}

export default Footer;
