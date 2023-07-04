import React from 'react'
import "./aboutteam.css"
import AboutteamData from './AboutteamData'
import ED from "../assets/ED.PNG";
import IT from "../assets/IT.PNG";
import farmer from "../assets/farmers.PNG";

function AboutTeam() {
  return (
    <div className="trip">
    <h1> OWO BOARD & STRUCTURE </h1>
    <p>OMUKAZI W’OMUTIMA ORGANISATIONAL STRUCTURE:</p>
    <div className="tripcard">
      <AboutteamData
        image={ED}
        heading="Consolata (Niwagaba) Tumwesigye"
        text=" Social Development Specialist with basis in Governance and Management, 
        Organisational Development, Agri-business, Education and Public Health
        ED-Omukazi W'omutima Ltd. "
      />
      <AboutteamData
        image={IT}
        heading="Tweheyo Ivan-kfit"
        text="Software Engineer (Full Stack Developer), IT at Ministry of Gender Labour and Social Development, IT-Omukazi W'omutima Ltd. "
      />
      <AboutteamData
        image={farmer}
        heading="OWO-Principal Farmer"
        text=" Principal farmer Specialist, Kanungu district agricultural officer 
        Organisational Development, Agri-business, Education and Public Health,
        PIA-Omukazi W'omutima Ltd. "
      />
    </div>
    <div className='structure'>
        <img src={require ("../assets/owlstructure.PNG")}  alt='coffee'/>
    </div>
  </div>
  )
}

export default AboutTeam
