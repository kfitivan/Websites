import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/img6.jpg";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Trip />
      <Footer />
    </>
  );
}
export default About;
