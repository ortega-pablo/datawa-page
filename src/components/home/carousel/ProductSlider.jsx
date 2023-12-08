import PropTypes from "prop-types";

function ProductSlider({ product }) {
  return (
    <div className="product">
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div className="hoverLayer">
        <button>{product.name}</button>
      </div>
    </div>
  );
}

ProductSlider.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // Agrega otras propiedades según sea necesario
  }).isRequired,
};

export default ProductSlider;