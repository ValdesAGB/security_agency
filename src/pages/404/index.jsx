import React, { useEffect } from 'react'
import Head from '../../components/team-components/Head'

function NotFound() {
  useEffect(() => {
    const pageTitle = 'SafZon - Not found'
    document.title = pageTitle

    return () => {
      document.title = 'SafZon'
    }
  }, [window.location.pathname])

  const NotFoundComponentTitle = '404 Not found'
  const NotFoundComponentPageName = 'Not found'

  return (
    <React.Fragment>
      <Head
        title={NotFoundComponentTitle}
        pageName={NotFoundComponentPageName}
      />
    </React.Fragment>
  )
}

export default NotFound
