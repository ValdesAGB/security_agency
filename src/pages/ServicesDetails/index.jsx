import React, { useContext, useEffect } from 'react'
import Details from '../../components/service-details-components/Details'
import Head from '../../components/team-components/Head'
import { LoadingContext, ServiceDetailsContext } from '../../untils/context'

function ServiceDetails() {
  const { service } = useContext(ServiceDetailsContext)
  const { load } = useContext(LoadingContext)

  useEffect(() => {
    localStorage.setItem('details', JSON.stringify(service))
  }, [service])

  const ServicesDetailsComponentTitle = load ? 'Chargement...' : service.title
  const ServicesDetailsComponentPageName = 'Service détails'

  useEffect(() => {
    const pageTitle = `SafZon - Service détails : ${
      load ? 'Chargement...' : service.title
    }`
    document.title = pageTitle

    return () => {
      document.title = 'SafZon'
    }
  }, [service])

  return (
    <React.Fragment>
      <Head
        title={ServicesDetailsComponentTitle}
        pageName={ServicesDetailsComponentPageName}
      />
      <Details />
    </React.Fragment>
  )
}

export default ServiceDetails
/**service.title !== null ? service.title.toUpperCase() : 'SERVICE DETAILS' */
