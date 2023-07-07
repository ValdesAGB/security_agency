import React from 'react'
import Home from '../../components/accueil-components/Home'
import Service from '../../components/accueil-components/Service'
import Experience from '../../components/accueil-components/Experience'
import AllServices from '../../components/AllServices'
import Reasons from '../../components/accueil-components/Reasons'
import NewsLetter from '../../components/accueil-components/NewsLetter'
import Feedback from '../../components/accueil-components/Feedback'
import Guards from '../../components/accueil-components/Guards'
import ServiceSlider from '../../components/accueil-components/ServiceSlider'
import { AllServicesElements } from '../../data'

function Accueil() {
  const GuardComponentClassName = 'col-md-6 col-lg'
  const GuardComponentSlice = 3
  return (
    <React.Fragment>
      <Home />
      <Service />
      <Experience />
      <AllServices
        component={<ServiceSlider array={AllServicesElements} level={4} />}
      />
      <Reasons />
      <NewsLetter />
      <Feedback />
      <Guards
        GuardClassName={GuardComponentClassName}
        GuardSlice={GuardComponentSlice}
      />
    </React.Fragment>
  )
}

export default Accueil
/** 
   
   
   

      
      <Guards
        GuardClassName={GuardComponentClassName}
        GuardSlice={GuardComponentSlice}
      />*/
