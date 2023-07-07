import React from 'react'
import FooterAbout from './FooterAbout'
import FooterContact from './FooterContact'
import FooterQuickLinks from './FooterQuickLinks'
import FooterNewletters from './FooterNewletters'
import { styled } from 'styled-components'
import { color } from '../untils/color'

const Foot = styled.footer`
  background-color: ${color.formulaireBacgroundCOlor};
`

const Container = styled.div`
  display: grid;

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 60px;
    padding-top: 30px;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding-bottom: 70px;
    padding-top: 40px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    grid-template-columns: 30% 20% 20% 25%;
    gap: 20px;
    padding-bottom: 80px;
    padding-top: 60px;
  }
  grid-template-columns: 30% 20% 20% 25%;
  gap: 20px;
  padding-bottom: 120px;
  padding-top: 90px;
`

function Footer() {
  return (
    <React.Fragment>
      <Foot className="row">
        <div>
          <Container className="container">
            <FooterAbout />
            <FooterContact />
            <FooterQuickLinks />
            <FooterNewletters />
          </Container>
        </div>
      </Foot>
    </React.Fragment>
  )
}

export default Footer
