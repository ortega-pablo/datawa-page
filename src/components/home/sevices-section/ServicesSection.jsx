import {
  LuClock4,
  LuMedal,
  LuPenTool,
  LuShieldCheck,
  LuTruck,
} from "react-icons/lu";
import {
  CardIcon,
  CardResume,
  CardTitle,
  ServiceCard,
  ServicesSectionContainer,
} from "./servicesSection.styles";

function ServicesSection() {
  return (
    <ServicesSectionContainer>
      <ServiceCard>
        <CardTitle>Diseño</CardTitle>
        <CardResume>
          Realizamos diseños personalizados según tus necesidades
        </CardResume>
        <CardIcon>
          <LuPenTool />
        </CardIcon>
      </ServiceCard>
      <ServiceCard>
        <CardTitle>Calidad</CardTitle>
        <CardResume>
          Cada uno de nuestros productos está creado para ofrecerte la mejor
          calidad.{" "}
        </CardResume>
        <CardIcon>
          <LuMedal />
        </CardIcon>
      </ServiceCard>
      <ServiceCard>
        <CardTitle>Garantía</CardTitle>
        <CardResume>
          Ofrecemos garantía sobre todos nuestros productos
        </CardResume>
        <CardIcon>
          <LuShieldCheck />
        </CardIcon>
      </ServiceCard>
    </ServicesSectionContainer>
  );
}

export default ServicesSection;
