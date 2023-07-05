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

  const AboutComponentTitle = 'About Us'
  const AboutComponentPageName = 'About Us'
  const GuardComponentClassName = 'col-4'
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
