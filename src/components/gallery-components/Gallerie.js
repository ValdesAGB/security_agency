import React from 'react'
import GallerieContent from './GallerieContent'
import { styled } from 'styled-components'
import GallerieBtn from './GallerieBtn'

const Container = styled.div`
  padding-left: 0;
  padding-right: 0;
  @media (max-width: 479px) {
    padding-bottom: 30px;
    padding-top: 60px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    padding-bottom: 40px;
    padding-top: 60px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding-bottom: 40px;
    padding-top: 70px;
  }

  padding-bottom: 90px;

  @media (min-width: 992px) and (max-width: 1199px) {
    padding-top: 80px;
  }

  padding-top: 120px;

  transition: all 2s;
`

function Gallerie() {
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
