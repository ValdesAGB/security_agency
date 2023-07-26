import React from 'react'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import { police } from '../../untils/police'

function GuardInformations({ container, name }) {
  const GuardInformation = styled.div`
    padding: 5% 0;
    background-color: ${color.homeTitle};
    transition: background-color 0.4s;
    ${container}:hover & {
      background-color: ${color.main};
    }
    .name {
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      font-family: ${police.main};
      color: ${color.guardInfomartionsColor};
      transition: color 0.4s 0.2s;
      ${container}:hover & {
        color: white;
      }
    }
    span {
      font-size: 14px;
      font-weight: 400;
      font-family: ${police.second};
      color: ${color.guardInfomartionsColor};
      transition: color 0.4s 0.2s;
      ${container}:hover & {
        color: white;
      }
    }
  `
  return (
    <React.Fragment>
      <GuardInformation>
        <h4>
          <span className="name">{name}</span>
        </h4>
        <span>Director</span>
      </GuardInformation>
    </React.Fragment>
  )
}

export default GuardInformations
