import React from 'react'
import 'animate.css'
import { styled, keyframes } from 'styled-components'
import { police } from '../../untils/police'
import { color } from '../../untils/color'

function Home() {
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
  `

  const Content = styled.div`
    padding: 10% 0;
    h3 {
      font-family: ${police.main};
      color: ${color.main};
      font-weight: 400;
      animation: ${fadeInUp} 1s both;
    }
    h1 {
      font-size: 5em;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 3%;
      animation: ${fadeInUp} 1s linear both;
      animation-delay: 0.5s;
    }
    p {
      font-family: ${police.second};
      font-size: 14px;
      color: white;
      animation: ${fadeInUp} 1s linear both;
      animation-delay: 1.5s;
    }
  `

  const AppointmentBtn = styled.button`
    /*Revenir pour gérer l'animation du bouton */
    font-family: ${police.second};
    font-weight: 600;
    border-radius: 50px;
    padding: 1.5% 5%;
    margin-top: 5%;
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
    animation: ${fadeInUp} 1s linear both;
    animation-delay: 2s;
  `

  return (
    <React.Fragment>
      <Section>
        <Content className="container">
          <div>
            <div className="row">
              <div className="col-7">
                <h3>We Provide The Best</h3>
                <h1>Security Service</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <AppointmentBtn className="btn">GET APPOINTMENT</AppointmentBtn>
              </div>
            </div>
          </div>
        </Content>
      </Section>
    </React.Fragment>
  )
}

export default Home
