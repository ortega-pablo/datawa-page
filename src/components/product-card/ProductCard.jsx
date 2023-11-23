import PrimaryLink from "../buttons/PrimaryLink";
import PropTypes from "prop-types";
import {
  CardContainer,
  NamePrice,
  ProductBTN,
  ProductCategory,
  ProductImage,
  TextContainer,
} from "./productCard.styles";

function ProductCard({ id, name, description, price, category, image }) {
    
    console.log(image)
  return (
    <CardContainer>
      <ProductImage src={image} alt={name} />
      <TextContainer>
        <NamePrice>
      <p>{name}</p>
      <p>$ {price}</p>

        </NamePrice>
      <ProductCategory>{category}</ProductCategory>
      </TextContainer>
      <ProductBTN>
        <PrimaryLink buttonText="Detalle" />
      </ProductBTN>
    </CardContainer>
  );
}

ProductCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string
  };

export default ProductCard;
