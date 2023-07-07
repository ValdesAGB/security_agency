import React from 'react'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import { police } from '../../untils/police'
import { Link } from 'react-router-dom'

const bgImage =
  'https://demo.hasthemes.com/safzon-preview/assets/images/bg/breadcrumb-bg.jpg'

const Section = styled.section`
  background: url(${bgImage}) center center / cover no-repeat;
`

const Title = styled.h2`
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 36px;
  font-family: ${police.main};
`

const Container = styled.div`
  padding: 120px 0;
  text-align: center;
  color: white;
  span {
    padding: 0 8px;
    font-family: ${police.second};
    font-size: 14px;
  }
  .homeLink {
    color: white;
    text-decoration: none;
    transition: color 0.4s;
    &:hover {
      color: ${color.five};
    }
  }
`

function Head({ title, pageName }) {
  return (
    <React.Fragment>
      <Section>
        <Container className="container">
          <Title>{title}</Title>
          <div>
            <span>
              <Link to="/" className="homeLink">
                Home
              </Link>
            </span>
            / <span>{pageName}</span>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Head
