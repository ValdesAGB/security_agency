import React, { useEffect } from 'react'
import Head from '../../components/team-components/Head'
import Gallerie from '../../components/gallery-components/Gallerie'

function Gallery() {
  useEffect(() => {
    const pageTitle = 'SafZon - Gallery'
    document.title = pageTitle

    return () => {
      document.title = 'SafZon'
    }
  }, [window.location.pathname])

  const GalleryComponentTitle = 'Galleries'
  const GalleryComponentPageName = 'Galleries'
  return (
    <React.Fragment>
      <Head title={GalleryComponentTitle} pageName={GalleryComponentPageName} />
      <Gallerie />
    </React.Fragment>
  )
}

export default Gallery
