import React from 'react'
import { color } from '../../untils/color'
import { styled } from 'styled-components'
import { serviceElements } from '../../data'
import { police } from '../../untils/police'

function Service() {
  const Section = styled.section`
    background-color: ${color.third};
  `

  const Content = styled.div`
    padding: 2%;
    background-color: ${(props) =>
      props.ids === '2' || props.ids === '4' ? color.four : color.third};
  `

  const Title = styled.h5`
    font-size: 18px;
    margin-bottom: 7px;
    font-weight: 600;
  `

  const Paragraph = styled.p`
    font-size: 14px;
    line-height: 26px;
    text-align: left;
    font-family: ${police.second};
    font-weight: 300;
  `
  return (
    <React.Fragment>
      <Section>
        <div className="row">
          {serviceElements.map(({ id, illustration, title, text }) => (
            <Content key={id} className="col" ids={id}>
              <div className="row">
                <div className="col-3 mt-3">
                  <img src={illustration} alt={title} className="w-100" />
                </div>
                <div className="col-9">
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
