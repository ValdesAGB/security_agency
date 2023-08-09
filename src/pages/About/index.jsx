import React, { useEffect } from 'react'
import Head from '../../components/team-components/Head'
import Experience from '../../components/accueil-components/Experience'
import Guards from '../../components/accueil-components/Guards'
import Stats from '../../components/about-components/Stats'

function About() {
  useEffect(() => {
    const pageTitle = 'SafZon - About'
    document.title = pageTitle

    return () => {
      document.title = 'SafZon'
    }
  }, [window.location.pathname])

  const AboutComponentTitle = 'À propos De Nous'
  const AboutComponentPageName = 'À propos De Nous'
  const GuardComponentClassName = 'col-md-6 col-lg'
  const GuardComponentSlice = 3

  return (
    <React.Fragment>
      <Head title={AboutComponentTitle} pageName={AboutComponentPageName} />
      <Experience />
      <Stats />
      <Guards
        GuardClassName={GuardComponentClassName}
        GuardSlice={GuardComponentSlice}
      />
    </React.Fragment>
  )
}

export default About
