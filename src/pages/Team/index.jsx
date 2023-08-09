import React, { useEffect } from 'react'
import Head from '../../components/team-components/Head'
import Guards from '../../components/accueil-components/Guards'

const GuardComponentClassName = 'col-md-6 col-lg-4'
const GuardComponentSlice = 6
const TeamComponentTitle = 'Equipe'
const TeamComponentPageName = 'Equipe'

function Team() {
  useEffect(() => {
    const pageTitle = 'SafZon - Team'
    document.title = pageTitle

    return () => {
      document.title = 'SafZon'
    }
  }, [window.location.pathname])

  return (
    <React.Fragment>
      <Head title={TeamComponentTitle} pageName={TeamComponentPageName} />
      <Guards
        GuardClassName={GuardComponentClassName}
        GuardSlice={GuardComponentSlice}
      />
    </React.Fragment>
  )
}

export default Team
