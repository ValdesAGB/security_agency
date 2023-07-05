import React from 'react'
import { styled } from 'styled-components'
import { BetweenBold } from '../../untils/underline'
import { color } from '../../untils/color'
import { police } from '../../untils/police'
import { GuardsElements } from '../../data'
import GuardNetworks from './GuardNetworks'
import GuardInformations from './GuardInformations'
import GuardCover from './GuardCover'

function Guards({ GuardClassName, GuardSlice }) {
  const Section = styled.div`
    background-color: ${color.guardsBgColor};
    padding-top: 120px;
    padding-bottom: 90px;
  `

  const Head = styled.div`
    text-align: center;
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

  const Guard = styled.a`
    text-align: center;
    text-decoration: none;
    margin-bottom: 2%;
  `

  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <Head className="row justify-content-center">
            <h1>Our Guards</h1>
            <BetweenBold />
            <p className="col-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore
            </p>
          </Head>
          <div className="row">
            {GuardsElements.slice(0, GuardSlice).map(({ id, cover, name }) => (
              <Guard href="#" key={id} className={GuardClassName}>
                <GuardCover name={name} cover={cover} container={Guard} />
                <GuardInformations name={name} container={Guard} />
                <GuardNetworks container={Guard} />
              </Guard>
            ))}
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Guards
