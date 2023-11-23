import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/productsSlice";
import {
  BannerProducts,
  FlexProducts,
  PositionBTN,
  ProductsSectionContainer,
  Square,
  TextContainer,
  TextContent,
  TextName,
  TextResume,
  TextTitle,
  VerticalBar,
} from "./productsSection.styles";
import PrimaryLink from "../../buttons/PrimaryLink";
import ProductCard from "../../product-card/ProductCard";
import { homeProducts } from "../../../helpers/homeProducts";

function ProductsSection() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);

  useEffect(() => {
    dispatch(fetchProducts(homeProducts));
  }, [dispatch]);

  return (
    <ProductsSectionContainer>
      <BannerProducts>
        <TextContainer>
          <TextContent>
            <TextName>Destacados</TextName>
            <TextTitle>Explorá nuestros diseños detacados</TextTitle>
            <TextResume>
              Explora nuestras selecciónes destacadas y dejate sorprender por la calidad, estilo y funcionalidad de nuestros productos.
            </TextResume>
          </TextContent>
          <Square></Square>
          <PositionBTN>
            <PrimaryLink buttonText="Más productos" />
          </PositionBTN>
        </TextContainer>
          <VerticalBar></VerticalBar>
      </BannerProducts>
      <FlexProducts>
        {products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          );
        })}
      </FlexProducts>
    </ProductsSectionContainer>
  );
}

export default ProductsSection;
