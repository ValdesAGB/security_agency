import React from 'react'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import DetailsBtn from './DetailsBtn'
import DetailsContent from './DetailsContent'

const Section = styled.section`
  background-color: ${color.guardsBgColor};

  @media (max-width: 479px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    padding-bottom: 70px;
    padding-top: 60px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-bottom: 70px;
    padding-top: 70px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding-bottom: 80px;
    padding-top: 80px;
  }
  padding-bottom: 120px;
  padding-top: 120px;
`

const Content = styled.div`
  display: grid;

  @media (max-width: 991px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 20px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 30% 70%;
    grid-template-rows: auto;
    gap: 20px;
  }
`

function Details() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <div>
            <Content>
              <DetailsBtn />
              <DetailsContent />
            </Content>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Details
