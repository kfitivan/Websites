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
         {/* <TripData
          image={Ishasha}
          heading="O’Wo-Model Farmer"
          text=" Our farmers are trained on several ways on how to look after their coffee gardens. 
          these include coffee prunning which involves the selective removal of a coffee plant, including branches, shoots, flowers and fruits.  "
        /> */}
      </div>
    </div>
  );
}
export default Trip;
