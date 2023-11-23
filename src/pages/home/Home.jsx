import Footer from "../../components/footer/Footer";
import BannerSection from "../../components/home/banner-section/BannerSection";
import CategoriesSection from "../../components/home/categories-section/CategoriesSection";
import CustomizedSection from "../../components/home/customized-section/CustomizedSection";
import OurHistorySection from "../../components/home/our-history/OurHistorySection";
import ProductsSection from "../../components/home/products-section/ProductsSection";
import ServicesSection from "../../components/home/sevices-section/ServicesSection";
import WhySection from "../../components/home/why-section/WhySection";
import Navbar from "../../components/navbar/Navbar";
import { HomeMain } from "./home.style";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeMain>
        <BannerSection />
        <CategoriesSection />
        <OurHistorySection />
        <ProductsSection />
        <ServicesSection />
        <WhySection />
        <CustomizedSection />
      </HomeMain>
      <Footer />
    </div>
  );
}

export default Home;
