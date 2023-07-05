import React from 'react'
import { TwoColors } from '../../untils/underline'
import { WhyElements } from '../../data'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import { police } from '../../untils/police'

function Why() {
  const HeadTitle = styled.h1`
    margin-bottom: 3%;
    font-weight: 700;
    font-size: 36px;
    color: ${color.second};
    font-family: ${police.main};
  `

  const Description = styled.p`
    margin: 5% 0;
    line-height: 25px;
    color: ${color.five};
    font-family: ${police.second};
    font-size: 16px;
    max-width: 530px;
  `

  const IllustrationContainer = styled.div`
    margin-top: 4%;
  `

  const Title = styled.h3`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 7px;
    font-family: ${police.main};
    text-align: left;
    color: ${color.whyTitleColor};
  `

  const Paragraph = styled.p`
    font-size: 16px;
    line-height: 30px;
    color: ${color.nine};
    max-width: 390px;
    text-align: left;
    font-family: ${police.second};
  `
  return (
    <React.Fragment>
      <HeadTitle>Why Choose Us</HeadTitle>
      <TwoColors />
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod
        tempor incididunt ut labore
      </Description>
      <div>
        {WhyElements.map(({ id, illustration, title }) => (
          <div className="row" key={id}>
            <IllustrationContainer className="col-2">
              <img src={illustration} alt={title} className="w-100" />
            </IllustrationContainer>
            <div className="col">
              <Title>{title}</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipi elit sed do
                eiusmod tempor incididunt ut labor et dolore magna aliqua.
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Why
