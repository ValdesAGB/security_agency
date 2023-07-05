import React from 'react'
import { styled } from 'styled-components'
import { police } from '../untils/police'
import { color } from '../untils/color'
import { BetweenBold } from '../untils/underline'

function AllServices({ component }) {
  const Section = styled.section`
    background-color: ${color.third};
    text-align: center;
    padding: 8% 0;
  `

  const Head = styled.div`
    h1 {
      font-family: ${police.main};
      color: ${color.second};
      font-size: 36px;
      line-height: 42px;
      font-weight: 700;
    }
    p {
      font-family: ${police.second};
      line-height: 25px;
      font-size: 14px;
      color: ${color.five};
      margin-bottom: 4%;
    }
  `

  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <Head className="row justify-content-center">
            <h1>Our Services</h1>
            <BetweenBold />
            <p className="col-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore
            </p>
          </Head>
          {component && component}
        </div>
      </Section>
    </React.Fragment>
  )
}

export default AllServices
