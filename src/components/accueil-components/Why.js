import React from 'react'
import { TwoColors } from '../../untils/underline'
import { WhyElements } from '../../data'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import { police } from '../../untils/police'
const HeadTitle = styled.h2`
  font-weight: 700;
  color: ${color.second};
  font-family: ${police.main};
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
`

const Underline = styled.div`
  @media (max-width: 479px) {
    width: 40%;
  }
  @media (min-width: 480px) andv(max-width: 767px) {
    width: 25%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 18%;
  }
  width: 30%;
`

const Description = styled.p`
  line-height: 25px;
  color: ${color.five};
  font-family: ${police.second};
  font-size: 16px;
  max-width: 530px;
  margin-top: 25px;
  @media (max-width: 479px) {
    margin-bottom: 25px;
  }
  margin-bottom: 25px;
`

const IllustrationContainer = styled.div`
  margin-top: 4%;
`

const Illustration = styled.img`
  @media (max-width: 425px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    width: 100%;
  }
`

const Title = styled.h4`
  font-weight: 600;
  margin-bottom: 7px;
  font-family: ${police.main};
  text-align: left;
  color: ${color.whyTitleColor};
  @media (max-width: 767px) {
    font-size: 21px;
    line-height: 26px;
  }
`

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: ${color.nine};
  max-width: 390px;
  text-align: left;
  font-family: ${police.second};
  margin-bottom: 25px;
`

function Why() {
  return (
    <React.Fragment>
      <HeadTitle>Why Choose Us</HeadTitle>
      <Underline>
        <TwoColors />
      </Underline>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod
        tempor incididunt ut labore
      </Description>
      <div>
        {WhyElements.map(({ id, illustration, title }) => (
          <div className="row" key={id}>
            <IllustrationContainer className="col-3 col-md-2">
              <Illustration src={illustration} alt={title} />
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
