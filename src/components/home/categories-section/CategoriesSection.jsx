import {
  Bar,
  CategoriesContainer,
  CategoryButton,
} from "./categoriesSection.style";
import { LuBedDouble, LuInbox, LuLamp, LuSofa } from "react-icons/lu";

function CategoriesSection() {
  return (
    <CategoriesContainer>
      <CategoryButton>
        <LuBedDouble size={50} />
        <span>Dormitorio</span>
      </CategoryButton>
      <Bar />
      <CategoryButton>
        <LuSofa size={50} />
        <span>Living</span>
      </CategoryButton>
      <Bar />
      <CategoryButton>
        <LuLamp size={50} />
        <span>Luminaria</span>
      </CategoryButton>
      <Bar />
      <CategoryButton>
      <LuInbox size={50} />
        <span>Oficina</span>
      </CategoryButton>
    </CategoriesContainer>
  );
}

export default CategoriesSection;
