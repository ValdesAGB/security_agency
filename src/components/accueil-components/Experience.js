import React from 'react'
import { styled } from 'styled-components'
import { police } from '../../untils/police'
import { color } from '../../untils/color'
import video from '../../assets/video.mp4'
import { TwoColors } from '../../untils/underline'
import { Link } from 'react-router-dom'

const Section = styled.section`
  @media (max-width: 479px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (min-width: 480px) and (max-width: 1199px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  padding-top: 120px;
  padding-bottom: 120px;
`

const Title = styled.h2`
  font-weight: 600;
  font-family: ${police.main};
  color: ${color.second};
  text-align: left;
  @media (max-width: 479px) {
    font-size: 26px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 26px;
  }
  font-size: 36px;
  @media (min-width: 768px) {
    line-height: 50px;
  }
`
const Underline = styled.div`
  @media (max-width: 479px) {
    width: 50%;
    margin-top: 20px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    width: 25%;
    margin-top: 20px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 15%;
    margin-top: 20px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 30%;
    margin-top: 20px;
  }
  @media (min-width: 1200px) {
    width: 20%;
    margin-top: 20px;
  }
`

const Paragraph = styled.p`
  font-size: 16px;
  margin: 30px 0 2rem 0;
  line-height: 25px;
  font-family: ${police.second};
  color: ${color.five};
`

const ContactBtn = styled(Link)`
  /*Revenir pour gérer l'animation du bouton */
  font-family: ${police.second};
  font-weight: 500;
  border-radius: 50px;
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
  @media (max-width: 479px) {
    font-size: 11px;
    padding: 10px 21px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 11px;
    padding: 10px 21px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    padding: 10px 30px;
  }
`

const VideoContainer = styled.div`
  @media (max-width: 479px) {
    margin-top: 15%;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    margin-top: 15%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 10%;
  }

  video {
    width: 100%;
  }
`

function Experience() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg">
              <Title>
                We Have 21 Years of <br /> Experience
              </Title>
              <Underline>
                <TwoColors />
              </Underline>
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
            <VideoContainer className="col-md-8 col-lg">
              <video
                src={video}
                controls
                poster="https://demo.hasthemes.com/safzon-preview/assets/images/about/about-01.png"
              />
            </VideoContainer>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Experience
