import React from 'react'
import "./aboutteam.css"
import AboutteamData from './AboutteamData'
import ED from "../assets/ED.PNG";
import IT from "../assets/IT.PNG";
import marvin from "../assets/marvin.PNG";

function AboutTeam() {
  return (
    <div className="trip">
    <h1> OWO BOARD & STRUCTURE </h1>
    <p><strong>OMUKAZI W’OMUTIMA COMPANY STRUCTURE & LEGAL STATUS:</strong></p>
    <p>Omukazi W’omutima Ltd Board of Directors comprises of 4 directors namely; Consolata Tumwesigye, Marvin Tumwesigye, John Ahimbisibwe and Roshella Ananura. The Board supports formulation of 
      the broad company strategies and growth plans. The company’s current management structure comprising of the board of directors as top management is spearheading the proposed coffee processing and value addition project.
       The board of Directors will continue to make policies and provide strategic direction for the company while the management will implement these policies and strategies on day-to-day basis.</p>
    <div className="tripcard">
      <AboutteamData
        image={ED}
        heading="Mrs. Consolota Tumwesigye "
        text=" is the company’s managing Director and manages the day to day operations. She is a qualified expert in business management with over 30 years of experience. She has practical skills and knowledge in financial and management accounting as well as administration. 
        She has obtained vast experience and proficiency in administration, consultancy and management nurtured over the past years across different sectors.
        She has extended this to Omukazi W’omutima Ltd business through her service in financial, operational management and strategy that is evident in its versatile performance, growth and expansion.  "
      />
      <AboutteamData
        image={marvin}
        heading="Mr. Marvin Tumwesigye "
        text="is a founding Director of Omukazi W’omutima Ltd and the managing Director in charge of marketing; he is one of the architectures behind the proposed coffee processing and value addition innovation. 
        He is a seasoned Entrepreneur and business oriented profession. He has has over 10 years’ experience in business management especially coffee trading and marketing.
         He presents over 5 years proficiency in private-sectorial service delivery, capacity building and training. "
      />
      <AboutteamData
        image={IT}
        heading="Tweheyo Ivan-kfit"
        text=" Software Engineer (Full Stack Developer), IT at Ministry of Gender Labour and Social Development, IT-Omukazi W'omutima Ltd.
        CEO, Digital Minds Limited an IT start up that was started with the aim of developing young talented Ugandans in software development so that they can build their skills and create their own jobs through having products on market. 
        This was due to the need of providing working space with internet and conduce atmosphere for unemployed graduates fresh from campus to come around research, code and keep themselves busy and explore more to find their talents in Tech. "
      />
    </div>
    <div className='structure'>
        <img src={require ("../assets/owlstructure.PNG")}  alt='coffee'/>
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
  )
}

export default AboutTeam
