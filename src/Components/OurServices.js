import React from 'react'
import './ourservices.css'

function OurServices(props) {
  return (
    <div className="about-container">
    <h1>OWL SERVICES</h1>
    <p>
    In Kigezi, OWO’s work has evolved greatly,
reaching out to over 17,000 farmers, of these
females age 6-15 years’ account for 60% and
males 40%. OWO implements holistic social
enterprise agri-business models, with household
targeted programs, designed on membership
demand driven innovations. For example; OWLSACCO’s creation was premised on high demand
of agribusiness financial access, for the following
value chains; Coffee, Tea, Vegetables, Rice,
Maize, Beans, Irish Potatoes/Cassava/S-Potatoes,
Bananas, Cattle, poultry and Goats (to keep girls in
school until they graduate).
    </p>
    <p>OWO targets to reach 35,000 households with integrated interventions by 2025, today over 17,000
households have been registered as beneficiaries on all the 14 OWO supported value chains for both
food security and agribusiness. OWL however, flag-ships three value key chains; </p>
    
    <ol className="services">
        <li> <strong>DIARY CATTLE</strong> with over 1,500 households supported to receive Government free Heifers, 216 of them
already constructed biogas-plants for value addition supported by Kanungu District LG, KDCL, SNV and HIVOS. In
addition, 200 girls received goats with Support from KDCL and USAID FtF-CPM</li>
        <img src={require ("../assets/cows.PNG")}  alt='coffee'/>

        <li> <strong>COFFEE</strong> with 12,000 profiled households, of which 6,000 have been directly supported by the USAID-ICAN Coffee Activity</li>
        <img src={require ("../assets/coffeeprunning.PNG")}  alt='coffee'/>

        <li> <strong>BEANS/SOY-BEAN</strong>  with 6,000 profiled households, of which 2,000 have been directly supported by the USAID-ICAN Coffee Activity</li>
        <img src={require ("../assets/soya.PNG")}  alt='coffee'/>

    </ol>
  </div>
  )
}

export default OurServices
