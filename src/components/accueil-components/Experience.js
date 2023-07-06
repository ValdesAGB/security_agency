import React from 'react'
import { styled } from 'styled-components'
import { police } from '../../untils/police'
import { color } from '../../untils/color'
import video from '../../assets/video.mp4'
import { TwoColors } from '../../untils/underline'
import { Link } from 'react-router-dom'

function Experience() {
  const Section = styled.section`
    margin: 10% 0;
  `

  const Title = styled.h2`
    font-weight: 600;
    line-height: 50px;
    font-size: 36px;
    font-family: ${police.main};
    color: ${color.second};
    text-align: left;
  `

  const Paragraph = styled.p`
    font-size: 16px;
    margin: 30px 0 50px 0;
    line-height: 25px;
    font-family: ${police.second};
    color: ${color.five};
  `

  const ContactBtn = styled(Link)`
    /*Revenir pour gérer l'animation du bouton */
    font-family: ${police.second};
    font-weight: 600;
    border-radius: 50px;
    padding: 1.5% 5%;
    margin-top: 5%;
    text-decoration: none;
    color: white;
    background-color: ${color.main};
    transition: background-color 0.5s;
    &:hover {
      color: white;
      background-color: ${color.second};
    }
    &:focus {
      color: white;
      background-color: ${color.second};
    }
  `
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <Title>
                We Have 21 Years of <br /> Experience
              </Title>
              <TwoColors />
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimg veniam, quis nostrud exerci ullamco laboris nisi
                ut aliquip ex ea commo consequat. Duis aute irure dolor
                <br />
                <br />
                in reprehen in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur Excepteur sint occaecat cupidata non proident.
              </Paragraph>
              <ContactBtn to="/contact">CONTACT US</ContactBtn>
            </div>
            <div className="col">
              <video
                className="w-100"
                src={video}
                controls
                poster="https://demo.hasthemes.com/safzon-preview/assets/images/about/about-01.png"
              />
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Experience
