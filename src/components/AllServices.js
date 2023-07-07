import React from 'react'
import { styled } from 'styled-components'
import { police } from '../untils/police'
import { color } from '../untils/color'
import { BetweenBold } from '../untils/underline'

const Section = styled.section`
  background-color: ${color.third};
  text-align: center;
  @media (max-width: 479px) {
    padding-top: 60px;
    padding-bottom: 30px;
  }
  @media (max-width: 767px) {
    padding-top: 60px;
    padding-bottom: 40px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-bottom: 40px;
    padding-top: 70px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding-bottom: 60px;
    padding-top: 80px;
  }
  padding-bottom: 90px;
  padding-top: 120px;
`

const Head = styled.div`
  h1 {
    font-family: ${police.main};
    color: ${color.second};
    font-weight: 700;
    @media (max-width: 479px) {
      font-size: 26px;
      line-height: 30px;
    }
    @media (max-width: 767px) {
      font-size: 30px;
      line-height: 37px;
    }
    font-size: 36px;
    line-height: 42px;
  }
  p {
    font-family: ${police.second};
    line-height: 25px;
    font-size: 14px;
    color: ${color.five};
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
  }
`
const Underline = styled.div`
  @media (max-width: 479px) {
    width: 45%;
  }
  @media (max-width: 767px) {
    width: 30%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 25%;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 20%;
  }
  width: 15%;
`

function AllServices({ component }) {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <Head className="row justify-content-center">
            <h1>Our Services</h1>
            <Underline>
              <BetweenBold />
            </Underline>
            <div>
              <p className="col-md-8 col-xl-6 col-xxl-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </Head>
          {component && component}
        </div>
      </Section>
    </React.Fragment>
  )
}

export default AllServices
