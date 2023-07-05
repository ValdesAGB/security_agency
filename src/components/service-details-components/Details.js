import React, { useContext, useEffect } from 'react'
import { AllServicesElements } from '../../data'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import { police } from '../../untils/police'
import { LoadingContext, ServiceDetailsContext } from '../../untils/context'
import LoadingAnimation from '../../untils/Loader'
import DetailsBtn from './DetailsBtn'
import DetailsContent from './DetailsContent'

function Details() {
  const Section = styled.section`
    background-color: ${color.guardsBgColor};
    padding-bottom: 120px;
    padding-top: 120px;
  `

  const Content = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 4%;
  `

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
