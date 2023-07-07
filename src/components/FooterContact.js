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
  span {
    color: ${color.main};
  }
`

const Paragraph = styled.p`
  color: ${color.second};
  font-family: ${police.second};
  font-size: 14px;
  line-height: 30px;
  a {
    color: ${color.second};
    text-decoration: none;
    transition: color 0.4s;
    &:hover {
      color: ${color.main};
    }
  }
`

function FooterContact() {
  return (
    <React.Fragment>
      <div>
        <Title>
          CONTACT <span>US</span>
        </Title>
        <Paragraph>
          ur address goes here, stree Crossroad123.
          <br />
          P : 99 55 66 88 526
          <br />
          F : 55 4477 62
          <br />E : <a href="mailto:expu@email.com">expu@email.com</a>
        </Paragraph>
      </div>
    </React.Fragment>
  )
}

export default FooterContact
