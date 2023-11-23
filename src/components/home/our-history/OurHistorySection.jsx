import PrimaryLink from "../../buttons/PrimaryLink";
import {
  IMG1,
  IMG2,
  ImageContainer,
  OurHistoryContainer,
  PositionBTN,
  Square,
  TextContainer,
  TextContent,
  TextName,
  TextResume,
  TextTitle,
} from "./ourHistorySection.style";

function OurHistorySection() {
  return (
    <OurHistoryContainer>
      <ImageContainer>
        <IMG1 src="photos/working1.png" alt="photo 1" />
        <IMG2 src="photos/working2.png" alt="photo 2" />
      </ImageContainer>
      <TextContainer>
        <TextContent>
          <TextName>Nosotros</TextName>
          <TextTitle>El detalle como horizonte</TextTitle>
          <TextResume>
            <p>
              Desarrollamos nuestra pasión al crear muebles de diseño, manteniendo el enfoque en los detalles.
            </p>
            <p>Te contamos brevemente nuestra esencia.</p>
          </TextResume>
        </TextContent>
        <Square></Square>
        <PositionBTN>
          <PrimaryLink buttonText="Conocenos" />
        </PositionBTN>
      </TextContainer>
    </OurHistoryContainer>
  );
}

export default OurHistorySection;
