import "./Destinationstyles.css";
import DestinationData from "./DestinationData";
import Mtn1 from "../assets/farmers.PNG";
import Mtn2 from "../assets/cows.PNG";
import Mtn4 from "../assets/coffeetree.PNG";
import Mtn3 from "../assets/coffeeprunning.PNG";

function Destination() {
  return (

    <>
    <div className="destination">
      <h1>Omukazi W'Omutima Limited</h1>
      <h5>Our Slogan</h5>
      <p>Zero-Hunger, Zero-Poverty & ZeroEnvironmental Degradation.</p>
      <DestinationData
        className="first-des"
        text="Omukazi W’omutima is a Runyakitara phrase
        meaning a “Capable Woman/ Virtuous woman” as
        described in the Bible (Proverbs: 30;10-31).
        Omukazi W’omutima Organisation (OWO) is an
        affirmative Women/Youth-led Agribusiness Social
        Enterprise Farmer Organization based in Kanungu,
        with branches in Kisoro, Rukungiri, Kabale, Mitoma
        Districts and scaling up Country-wide.  "
        img1={Mtn1}
        img2={Mtn2}
      />
      {/* <h1>Visit Uganda</h1>
      <p>Trippy Trips in Kampala City</p> */}
      <DestinationData
        className="first-des-reverse "
        text="The
        organization started in 2015, initiated by Kinkizi
        Development Company Ltd (KDCL), as one of the
        Tea Sector’s social Cooperate Responsibility
        initiatives, 5 years later OW was left to be
        independent. The organization implements Socioeconomic development transformation models,
        targeting households and working with WOMEN as
        household 'Change Agents' and YOUTH as Village
        Agents."
        img1={Mtn3}
        img2={Mtn4}
      />
      </div>
      <div className="production">
      <img src={require ("../assets/pic1.PNG")}  alt='coffee'/>
      <img src={require ("../assets/pic2.PNG")}  alt='coffee'/>
      </div>
    </>
  );
}
export default Destination;
