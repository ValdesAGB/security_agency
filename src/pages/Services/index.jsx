import React, { useEffect } from 'react'
import Head from '../../components/team-components/Head'
import AllServices from '../../components/AllServices'
import { AllServicesElements } from '../../data'
import ServicesCard from '../../components/services-composants/ServicesCard'

function Services() {
  useEffect(() => {
    const pageTitle = 'SafZon - Services'
    document.title = pageTitle

    return () => {
      document.title = 'SafZon'
    }
  }, [window.location.pathname])

  const ServicesComponentTitle = 'Services'
  const ServicesComponentPageName = 'Services'
  return (
    <React.Fragment>
      <Head
        title={ServicesComponentTitle}
        pageName={ServicesComponentPageName}
      />
      <AllServices
        component={<ServicesCard array={AllServicesElements} level={7} />}
      />
    </React.Fragment>
  )
}

export default Services
