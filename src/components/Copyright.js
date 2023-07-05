import React from 'react'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import { police } from '../untils/police'
function Copyright() {
  const Section = styled.section`
    background-color: ${color.copyrightBgColor};
    padding: 12px 0 5px 0;
    h6 {
      color: ${color.copyrightColor};
      font-family: ${police.second};
      font-size: 14px;
      text-align: center;
      font-weight: 400;
    }
  `

  const WebGrowth = styled.a`
    color: ${color.copyrightColor};
    text-decoration: none;
    transition: color 0.5s, text-decoration 0.5s;
    &:hover {
      color: ${color.main};
      text-decoration: underline;
    }
  `
  return (
    <React.Fragment>
      <Section className="row">
        <div>
          <div className="container">
            <h6>
              Copyright © .All right reserved to{' '}
              <WebGrowth
                href="https://webgrowth.valdesagbokoni.com/"
                target="_blank"
              >
                @WebGrowth
              </WebGrowth>
            </h6>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Copyright
