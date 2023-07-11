import React from 'react'
import "./owlproducts.css"
import Owlproductsdata from './Owlproductsdata'
import Beans from "../assets/beans.PNG";
import Cattle from "../assets/cattle.PNG";
import coffee from "../assets/owlcoffee.PNG";


function Owlproducts() {
  return (
    <div className="trip">
      <h1> OWO VALUE-CHAINS </h1>
      <p>OWO’s 14 FOOD SECURITY AND AGRIBUSINESS VALUE-CHAINS:</p>
      <div className="tripcard">
        <Owlproductsdata
          image={Beans}
          heading="Crops"
          text=" 1. Coffee 
          2. Tea
          3. Beans
          4. Beans/Soybean
          6. Irish-potatoes
          7. Rice
          8. Maize. "
        />
        <Owlproductsdata
          image={Cattle}
          heading="LiveStock"
          text="9. Dairy-Cattle
          10. Poultry
          11.Piggery
          12. Rabbits
          13. Apiary
          14. Goats. "
        />
        <Owlproductsdata
          image={coffee}
          heading="OWO-Products"
          text=" These are some of the Omukazi W'Omutima products that include coffee and diary products "
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
  )
}

export default Owlproducts
