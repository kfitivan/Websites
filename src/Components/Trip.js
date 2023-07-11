import "./Tripstyles.css";
import TripData from "./TripData";
import Bwindi from "../assets/tea.PNG";
import Kanungu from "../assets/biogas.PNG";
import coffee from "../assets/coffee.PNG";

function Trip() {
  return (
    <div className="trip">
      <h1> OWO INSTITUTIONS </h1>
      <p>Omukazi W’omutima Organization operates 3 institutions in one:</p>
      <div className="tripcard">
        <TripData
          image={Bwindi}
          heading="Omukazi W’omutima Ltd(OWL) Reg. No: 80020000633805"
          text="This Organization offers technical Agri-business extension services, across agricultural value chains at community level. "
        />
        <TripData
          image={Kanungu}
          heading="Omukazi W’omutima SACCO"
          text="Kanungu District
            Women Coffee Producers and Buyers Credit and
            Savings (Omukazi W’omutima Cooperative
            Society)- Reg. No: P.9842/RCS, for farmer financial
            access, produce value
            addition and
            marketing. Also gives
            loans to biogas farmers. "
        />
        <TripData
          image={coffee}
          heading="O’Wo-Grains"
          text="The forward and backward
          shopping-mall for above 2 entities. The 3
          organizations are interdependent and
          inseparable; they target and serve same farmers in
          their agribusiness enterprises, while O’Wo-Grains is
          a market place for
          both OWL and OWSACCO. However,
          each has an
          independent
          management
          system.  "
        />
      </div>
     <div className="our-partners">
      <h1>Our Partners</h1>

      <a href="https://ugandacoffee.go.ug/" target="_blank" rel="noopener noreferrer">
      <img src={require ("../assets/UCDA.PNG")}  alt='coffee'/>
      </a>
      
      <a href="https://kanungu.go.ug/" target="_blank" rel="noopener noreferrer">
      <img src={require ("../assets/MAAF.PNG")}  alt='coffee'/>
      </a>

      <a href="https://chemonics.com/" target="_blank" rel="noopener noreferrer">
      <img src={require ("../assets/bukoola.PNG")}  alt='coffee'/>
      </a>
      <a href="https://www.biogassolutions.co.ug/" target="_blank" rel="noopener noreferrer">
      <img src={require ("../assets/biogaslogo.PNG")}  alt='coffee'/>
      </a>
      
     </div>
    </div>
  );
}
export default Trip;
