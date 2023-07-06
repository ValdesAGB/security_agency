import React from 'react'
import { SubHeaderElements } from '../data'
import { styled } from 'styled-components'
import { police } from '../untils/police'
import { color } from '../untils/color'

function SubHeader() {
  const Section = styled.section`
    background: #444444;
    padding: 10px 0px 5px 0;
  `

  const AnyQuestion = styled.h3`
    color: white;
    font-size: 14px;
    font-family: ${police.second};
    text-align: left;
    a {
      text-decoration: none;
      color: white;
    }
  `
  const IconeList = styled.ul`
    text-align: right;
    padding: 0;
    li {
      margin: 0 10px;
    }
  `

  const LinkIcone = styled.a`
    text-decoration: none;
    color: white;
    transition: color 0.3s;
    &:hover {
      color: ${color.main};
    }
    i {
      font-size: 16px;
    }
  `
  return (
    <React.Fragment>
      <Section className="row">
        <div>
          <div className="container">
            <div className="row align-items-center">
              <AnyQuestion className="col">
                Have any question ?{' '}
                <a href="tel://+215 2145 2154" target="_blank">
                  +215 2145 2154
                </a>
              </AnyQuestion>
              <IconeList className="list-inline col">
                {SubHeaderElements.map(({ id, logo }) => (
                  <li key={id} className="list-inline-item">
                    <LinkIcone href="#">
                      <i className={`bi bi-${logo}`} />
                    </LinkIcone>
                  </li>
                ))}
              </IconeList>
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default SubHeader
