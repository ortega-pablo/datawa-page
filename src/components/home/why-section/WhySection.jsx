import {
  BannerTitle,
  BannerWhy,
  OtherQualities,
  Paragraph,
  PrincipalNumber,
  PrincipalQuality,
  PrincipalResume,
  PrincipalSquare,
  QualitiesSection,
  QualityContainer,
  QualityIcon,
  QualityResume,
  QualitySquare,
  QualityTitle,
  Subtitle,
  Title,
  VerticalBar,
  WhySectionContainer,
} from "./whySection.styles";
import { IoDiamondOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { BsBoxes } from "react-icons/bs";
import { TfiRulerPencil } from "react-icons/tfi";

function WhySection() {
  return (
    <WhySectionContainer>
      <BannerWhy>
        <BannerTitle>
          <Title>Por qué elegirnos</Title>
          <Subtitle>Elevamos tu hogar con muebles de autor</Subtitle>
          <VerticalBar></VerticalBar>
        </BannerTitle>
        <Paragraph>
          Estas son solo algunas razones por las cuales deberías elegirnos. Nos
          comprometemos en ofrecerte lo mejor en términos de calidad, diseño y
          servicio al cliente. Vamos más allá para convertir tu hogar en un
          lugar hermoso y acogedor que te encante.!
        </Paragraph>
      </BannerWhy>
      <QualitiesSection>
        <PrincipalQuality>
          <PrincipalSquare />
          <PrincipalNumber>200+</PrincipalNumber>
          <PrincipalResume>Productos realizados</PrincipalResume>
        </PrincipalQuality>
        <OtherQualities>
          <QualityContainer>
            <QualityIcon>
              <IoDiamondOutline />
            </QualityIcon>
            <QualityTitle>Calidad Excepcional</QualityTitle>
            <QualityResume>
              Todos nuestros muebles son fabricados con materiales duraderos y
              resistentes.
            </QualityResume>
            <QualitySquare></QualitySquare>
          </QualityContainer>
          <QualityContainer>
            <QualityIcon>
              <VscTools />
            </QualityIcon>
            <QualityTitle>Técnica profesional</QualityTitle>
            <QualityResume>
              Cada uno de nuestros productos es el resultado de tácnicas
              profecionales y manos expertas.
            </QualityResume>
            <QualitySquare></QualitySquare>
          </QualityContainer>
          <QualityContainer>
            <QualityIcon>
              <BsBoxes />
            </QualityIcon>
            <QualityTitle>Variedad de Materiales</QualityTitle>
            <QualityResume>
              Nos enorgullece ofrecer una amplica variedad de materiales para
              nuestros muebles.
            </QualityResume>
            <QualitySquare></QualitySquare>
          </QualityContainer>
          <QualityContainer>
            <QualityIcon>
              <TfiRulerPencil />
            </QualityIcon>
            <QualityTitle>Diseño Personalizado</QualityTitle>
            <QualityResume>
              Ofrecemos la opción de personalizar nuestros diseños para
              adaptarlos perfectamente a tu estilo y espacio.
            </QualityResume>
            <QualitySquare></QualitySquare>
          </QualityContainer>
        </OtherQualities>
      </QualitiesSection>
    </WhySectionContainer>
  );
}

export default WhySection;
