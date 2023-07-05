import React, { useEffect } from 'react'
import Head from '../../components/team-components/Head'
import Map from '../../components/contact-components/Map'
import ContactArea from '../../components/contact-components/ContactArea'

function Contact() {
  useEffect(() => {
    const pageTitle = 'SafZon - Contact'
    document.title = pageTitle

    return () => {
      document.title = 'SafZon'
    }
  }, [window.location.pathname])

  const ContactComponentTitle = 'Contact Us'
  const ContactComponentPageName = 'Contact Us'

  return (
    <React.Fragment>
      <Head title={ContactComponentTitle} pageName={ContactComponentPageName} />
      <Map />
      <div className="container">
        <ContactArea />
      </div>
    </React.Fragment>
  )
}

export default Contact
