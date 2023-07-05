import React from 'react'
import GallerieContent from './GallerieContent'
import { styled } from 'styled-components'

import GallerieBtn from './GallerieBtn'

function Gallerie() {
  const Container = styled.div`
    margin-top: 5%;
  `

  return (
    <React.Fragment>
      <section>
        <Container className="container">
          <GallerieBtn />
          <GallerieContent />
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Gallerie
