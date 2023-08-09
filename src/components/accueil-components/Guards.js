import React from 'react'
import { styled } from 'styled-components'
import { BetweenBold } from '../../untils/underline'
import { color } from '../../untils/color'
import { police } from '../../untils/police'
import { GuardsElements } from '../../data'
import GuardNetworks from './GuardNetworks'
import GuardInformations from './GuardInformations'
import GuardCover from './GuardCover'
import { Link } from 'react-router-dom'

const Section = styled.div`
  background-color: ${color.guardsBgColor};
  @media (max-width: 479px) {
    padding-bottom: 30px;
    padding-top: 60px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    padding-bottom: 40px;
    padding-top: 60px;
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
  text-align: center;
  h1 {
    font-family: ${police.main};
    color: ${color.second};
    font-weight: 700;
    @media (max-width: 479px) {
      font-size: 26px;
      line-height: 30px;
    }
    @media (min-width: 480px) and (max-width: 767px) {
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
    margin-bottom: 4%;
    margin-left: auto;
    margin-right: auto;
    max-width: 470px;
  }
`

const Underline = styled.div`
  @media (max-width: 479px) {
    width: 50%;
    margin-bottom: 20px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    width: 25%;
    margin-bottom: 20px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 20%;
    margin-bottom: 20px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 15%;
    margin-bottom: 20px;
  }
  width: 12%;
  margin-bottom: 20px;
`

const Content = styled.div`
  @media (max-width: 479px) {
    margin-top: 20px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    margin-top: 15px;
  }
`
const Guard = styled(Link)`
  text-align: center;
  text-decoration: none;
  margin-bottom: 2%;
`

function Guards({ GuardClassName, GuardSlice }) {
  return (
    <React.Fragment>
      <Section>
        <div className="container p-0">
          <Head className="row justify-content-center">
            <h1>Nos Gardes</h1>
            <Underline>
              <BetweenBold />
            </Underline>
            <div>
              <p className="col-md-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </Head>
          <Content className="row">
            {GuardsElements.slice(0, GuardSlice).map(({ id, cover, name }) => (
              <Guard to="/team" key={id} className={GuardClassName}>
                <GuardCover name={name} cover={cover} container={Guard} />
                <GuardInformations name={name} container={Guard} />
                <GuardNetworks container={Guard} />
              </Guard>
            ))}
          </Content>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Guards
