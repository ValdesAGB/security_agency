import React from 'react'
import { color } from '../../untils/color'
import { styled } from 'styled-components'
import { serviceElements } from '../../data'
import { police } from '../../untils/police'

const Section = styled.section`
  background-color: ${color.third};
`

const Content = styled.div`
  background-color: ${(props) =>
    props.id === '2' || props.id === '4' ? color.four : color.third};
  @media (max-width: 479px) {
    padding: 39px 15px;
  }
  @media (max-width: 767px) {
    padding: 29px 15px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 25px 25px;
  }
  @media (min-width: 992px) and (max-width: 1599px) {
    padding: 30px 20px;
  }
  padding: 50px 69px;
`

const IllustartionContainer = styled.div`
  @media (max-width: 767px) {
    text-align: center;
  }
`

const Illustartion = styled.img`
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 480px) {
    width: 70%;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    width: 100%;
  }
`

const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 7px;
  font-weight: 600;
  color: ${color.serviceTitleColor};
  font-family: ${police.main};
  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 16px;
  }
`

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 26px;
  text-align: left;
  font-family: ${police.second};
  color: ${color.serviceParagraphColor};
`

function Service() {
  return (
    <React.Fragment>
      <Section>
        <div className="row">
          {serviceElements.map(({ id, illustration, title, text }) => (
            <Content key={id} className="col-sm-6 col-lg" id={id}>
              <div className="row">
                <IllustartionContainer className="col-3 col-md-2 col-lg-3  col-xxl-3 mt-3">
                  <Illustartion src={illustration} alt={title} />
                </IllustartionContainer>
                <div className="col-9 col-md-10 col-lg-9 col-xxl-9">
                  <Title>{title}</Title>
                  <Paragraph>{text}</Paragraph>
                </div>
              </div>
            </Content>
          ))}
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Service
