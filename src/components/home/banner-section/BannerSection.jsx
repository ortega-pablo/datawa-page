import PrimaryLink from "../../buttons/PrimaryLink";
import {
  BannerContainer,
  Bar,
  Hero,
  IMG,
  Resume,
  TextContainer,
  Texture,
  Title,
} from "./bannerSection.styles";

function BannerSection() {
  return (
    <BannerContainer>
      <Hero>
        <Texture />
        <IMG />
        <TextContainer>
          <Title>Muebles de diseño para espacios exclusivos</Title>
          <Bar />
          <Resume>
            Diseñamos muebles para aquellos que aprecian la autenticidad y sofisticación.
            Dejate seducir por la calidad y el detalle en cada obra de arte.
          </Resume>
          <PrimaryLink buttonText={"Ver productos"} />
        </TextContainer>
      </Hero>
    </BannerContainer>
  );
}

export default BannerSection;
