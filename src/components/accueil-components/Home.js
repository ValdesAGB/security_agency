import React from 'react'
import 'animate.css'
import { styled, keyframes } from 'styled-components'
import { police } from '../../untils/police'
import { color } from '../../untils/color'
import { Link } from 'react-router-dom'

const bgImage =
  'https://demo.hasthemes.com/safzon-preview/assets/images/hero/hero-1.jpg'

const fadeInUp = keyframes`
0% {
opacity: 0;
transform: translateY(100%);
}
100% {
opacity: 1;
transform: translateY(0);
}
`

const Section = styled.section`
  background: url(${bgImage}) center center / cover no-repeat;
  @media (max-width: 767px) {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
  }
`

const Container = styled.div`
  padding: 10% 0;
  h5 {
    font-size: 22px;
    font-family: ${police.main};
    color: ${color.main};
    font-weight: 400;
    animation: ${fadeInUp} 1s both;
  }
  h1 {
    font-weight: 700;
    color: ${color.homeTitle};
    margin-bottom: 3%;
    font-family: ${police.main};
    animation: ${fadeInUp} 1s linear both;
    animation-delay: 0.5s;
    font-size: 72px;
    @media (max-width: 767px) {
      font-size: 32px;
      line-height: 40px;
    }
    @media (min-width: 767px) and (max-width: 1199px) {
      font-size: 46px;
    }
  }
  p {
    max-width: 570px;
    line-height: 25px;
    font-family: ${police.second};
    font-size: 14px;
    color: ${color.homeTitle};
    animation: ${fadeInUp} 1s linear both;
    animation-delay: 1.5s;
  }
`

const AppointmentBtn = styled(Link)`
  /*Revenir pour gérer l'animation du bouton */
  font-size: 14px;
  font-family: ${police.second};
  font-weight: 500;
  border-radius: 50px;
  padding: 1.5% 5%;
  display: inline-block;
  margin-top: 3%;
  border: none;
  text-decoration: none;
  color: ${color.homeTitle};
  background-color: ${color.main};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${color.second};
  }
  animation: ${fadeInUp} 1s linear both;
  animation-delay: 2s;
  @media (max-width: 767px) {
    margin-top: 10px;
    padding: 8px 25px;
    line-height: 22px;
    height: 40px;
  }
`

function Home() {
  return (
    <React.Fragment>
      <Section>
        <Container className="container">
          <div>
            <div className="row">
              <div className=" col-md-10 col-xl-8">
                <h5>We Provide The Best</h5>
                <h1>Security Service</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <AppointmentBtn to="/contact">GET APPOINTMENT</AppointmentBtn>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Home
