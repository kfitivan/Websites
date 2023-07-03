import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ContactImg from "../assets/img7.jpg";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={ContactImg}
        buttonText="Let's Talk"
        url="/"
        btnClass="show"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
