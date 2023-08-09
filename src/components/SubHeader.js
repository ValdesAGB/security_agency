import React from 'react'
import { SubHeaderElements } from '../data'
import { styled } from 'styled-components'
import { police } from '../untils/police'
import { color } from '../untils/color'
import PropTypes from 'prop-types'

const DefaultSection = styled.section`
  background: #444444;
  padding: 10px 0px 5px 0;
  @media (max-width: 991px) {
    display: none;
  }
`

const DefaultAnyQuestion = styled.h3`
  color: white;
  font-size: 14px;
  font-family: ${police.second};
  text-align: left;
  a {
    text-decoration: none;
    color: white;
  }
`

const DefaultIconeList = styled.ul`
  text-align: right;
  padding: 0;
  li {
    margin: 0 10px;
  }
`

const DefaultLinkIcone = styled.a`
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

function SubHeader({
  Section = DefaultSection,
  AnyQuestion = DefaultAnyQuestion,
  IconeList = DefaultIconeList,
  LinkIcone = DefaultLinkIcone,
  AnyQuestionClassName,
  IconeListClassName,
  AnyQuestionAndIconeListContainerClassName,
}) {
  return (
    <React.Fragment>
      <Section className="row">
        <div>
          <div className="container">
            <div className={AnyQuestionAndIconeListContainerClassName}>
              <AnyQuestion className={AnyQuestionClassName}>
                Vous avez une Question ?{' '}
                <a href="tel://+215 2145 2154" target="_blank">
                  +215 2145 2154
                </a>
              </AnyQuestion>
              <IconeList className={IconeListClassName}>
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

SubHeader.propTypes = {
  Section: PropTypes.object,
  AnyQuestion: PropTypes.object,
  IconeList: PropTypes.object,
  LinkIcone: PropTypes.object,
  AnyQuestionClassName: PropTypes.string,
  IconeListClassName: PropTypes.string,
  AnyQuestionAndIconeListContainerClassName: PropTypes.string,
}

SubHeader.defaultProps = {
  AnyQuestionClassName: 'col',
  IconeListClassName: 'list-inline col',
  AnyQuestionAndIconeListContainerClassName: 'row align-items-center',
}
export default SubHeader
