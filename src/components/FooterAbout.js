import React from 'react'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import { police } from '../untils/police'

const Title = styled.h5`
  font-weight: 600;
  font-size: 18px;
  font-family: ${police.main};
  color: ${color.second};
  margin-bottom: 15px;
  text-transform: uppercase;
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

function FooterAbout() {
  return (
    <React.Fragment>
      <div className="col ">
        <Title>
          à Propos de <span>nous</span>
        </Title>
        <Paragraph>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis,
          nisi ut aliquid ex ea commodi consequatur suscipit laboriosam quo
          nulla .
        </Paragraph>
      </div>
    </React.Fragment>
  )
}

export default FooterAbout
