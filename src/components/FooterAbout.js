import React from 'react'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import { police } from '../untils/police'

function FooterAbout() {
  const Title = styled.h5`
    font-weight: 600;
    font-size: 18px;
    font-family: ${police.main};
    color: ${color.second};
    margin-bottom: 10%;
    span {
      color: ${color.main};
    }
  `

  const Paragraph = styled.p`
    color: ${color.second};
    font-family: ${police.second};
    font-size: 14px;
    line-height: 25px;
  `
  return (
    <React.Fragment>
      <div className="col ">
        <Title>
          ABOUT <span>US</span>
        </Title>
        <Paragraph>
          There are many variations of pof em Ipsum avalable, but the majority
          haveatime form, binjected humour, or romised scvono dos nai..but.
        </Paragraph>
      </div>
    </React.Fragment>
  )
}

export default FooterAbout
