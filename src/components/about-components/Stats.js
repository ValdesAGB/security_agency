import React from 'react'
import { styled } from 'styled-components'
import { StatsElements } from '../../data'
import { police } from '../../untils/police'
import { color } from '../../untils/color'

function Stats() {
  const bgImage =
    'https://demo.hasthemes.com/safzon-preview/assets/images/bg/counter-bg.jpg'

  const Section = styled.section`
    background: url(${bgImage}) center center / cover no-repeat;
    position: relative;
  `
  const Container = styled.div`
    position: relative;
    z-index: 1;
  `
  const StatsContainer = styled.div`
    text-align: center;
    font-family: ${police.second};
    padding: 90px 120px;
  `

  const Cover = styled.img``

  const Level = styled.h2`
    font-weight: 700;
    color: #ffffff;
    margin-top: 10px;
  `
  const Text = styled.p`
    color: #ffffff;
    font-weight: 500;
    font-size: 17px;
    margin: 0;
    margin-top: 0px;
    position: relative;
    margin-top: 9px;
    display: inline-block;
    padding-bottom: 10px;
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 30%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    &::before {
      right: 50%;
    }

    &::after {
      left: 50%;
    }
  `

  const Hover = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    background-color: #000000;
    opacity: 0.7;
  `
  return (
    <React.Fragment>
      <Section>
        <Container className="container">
          <div>
            <StatsContainer className="row">
              {StatsElements.map(({ id, text, cover, level }) => (
                <div key={id} className="col">
                  <div>
                    <Cover src={cover} alt={text} />
                  </div>
                  <div>
                    <Level>{level}</Level>
                    <Text>{text}</Text>
                  </div>
                </div>
              ))}
            </StatsContainer>
          </div>
        </Container>
        <Hover />
      </Section>
    </React.Fragment>
  )
}

export default Stats
