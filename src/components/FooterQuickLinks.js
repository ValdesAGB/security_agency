import React from 'react'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import { police } from '../untils/police'
import { FooterQuickLinksElements } from '../data'

function FooterQuickLinks() {
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

  const List = styled.ul`
    line-height: 25px;

    a {
      font-family: ${police.second};
      font-size: 14px;
      text-decoration: none;
      line-height: 30px;
      color: ${color.second};
      transition: color 0.5s;
      &:hover {
        color: ${color.main};
      }
    }
  `
  return (
    <React.Fragment>
      <div>
        <Title>
          QUICK <span>LINKS</span>
        </Title>
        <List className="list-inline">
          {FooterQuickLinksElements.map(({ id, link }) => (
            <li key={id}>
              <a href="#">{link}</a>
            </li>
          ))}
        </List>
      </div>
    </React.Fragment>
  )
}

export default FooterQuickLinks
