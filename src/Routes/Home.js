import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import HomeImg from "../assets/coffee1.jpg";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Be a proud Farmer Today!"
        text="With Omukazi W'omutima"
        buttonText="Learn More"
        url="/Services"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
