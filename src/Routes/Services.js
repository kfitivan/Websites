import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ServiceImg from "../assets/img1 (2).JPG";
import Footer from "../Components/Footer";
import OurServices from "../Components/OurServices";
import Owlproducts from "../Components/Owlproducts";

function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={ServiceImg}
        title="Services"
      />
      <OurServices/>
      <Owlproducts/>
      <Footer />
    </>
  );
}
export default Services;
