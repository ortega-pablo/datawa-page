import PropTypes from "prop-types";
import { ButtonContainer } from "./primaryLink.style";

function PrimaryLink({ buttonText }) {
  return <ButtonContainer to={"#"}>{buttonText}</ButtonContainer>;
}
PrimaryLink.propTypes = {
  buttonText: PropTypes.string,
};
export default PrimaryLink;
