import React from 'react'
import FooterAbout from './FooterAbout'
import FooterContact from './FooterContact'
import FooterQuickLinks from './FooterQuickLinks'
import FooterNewletters from './FooterNewletters'
import { styled } from 'styled-components'
import { color } from '../untils/color'

function Footer() {
  const Foot = styled.footer`
    background-color: ${color.formulaireBacgroundCOlor};
  `

  const Container = styled.div`
    padding-top: 90px;
    padding-bottom: 120px;
    display: grid;
    grid-template-columns: 30% 20% 20% 25%;
    gap: 1.5%;
  `
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
