import PrimaryLink from "../../buttons/PrimaryLink";
import {
  Bar,
  CustomizedSectionContainer,
  CustomizedSectionContent,
  IMG1,
  IMG2,
  ImagesContainer,
  PositionBTN,
  Square,
  TextContainer,
  TextName,
  TextResume,
  TextTitle,
} from "./customizedSection.styles";

function CustomizedSection() {
  return (
    <CustomizedSectionContainer>
      <CustomizedSectionContent>
        <TextContainer>
          <TextName>Muebles de autor</TextName>
          <TextTitle>Creamos muebles únicos como vos</TextTitle>
          <TextResume>
            Llegó el momento de dejar atrás los muebles genéricos y abrazar la
            singularidad ¡Permitinos crear el mueble único que siempre soñaste!
            Te invitamos a conocer nuestros productos exclusivos.
          </TextResume>
          <PositionBTN>
            <PrimaryLink buttonText="Exclusivos" />
          </PositionBTN>
          <Square />
          <Bar />
        </TextContainer>
        <ImagesContainer>
          <IMG1 src="public/photos/custom1.svg" alt="" />
          <IMG2 src="public/photos/custom2.svg" alt="" />
        </ImagesContainer>
      </CustomizedSectionContent>
    </CustomizedSectionContainer>
  );
}

export default CustomizedSection;
