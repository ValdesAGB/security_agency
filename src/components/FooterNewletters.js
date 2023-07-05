import React from 'react'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import { police } from '../untils/police'
import { FooterNewlettersElements } from '../data'

function FooterNewletters() {
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

  const Networks = styled.div`
    a {
      font-family: ${police.second};
      font-size: 0.9em;
      text-decoration: none;
      margin: 0 10px;
      padding: 1px 3px;
      background-color: transparent;
      color: ${color.second};
      transition: background-color 0.5s, color 0.2s;
      &:hover {
        color: white;
        background-color: ${color.main};
      }
    }
  `

  const Paragraph = styled.p`
    color: ${color.second};
    font-family: ${police.second};
    font-size: 14px;
    line-height: 25px;
  `

  const Form = styled.form`
    margin: 6% 0;
    input {
      border: 1px solid #e5e5e5;
      width: 100%;
      height: 100%;
      color: #222;
    }
    button {
      border: none;
      background-color: ${color.main};
      color: white;
      padding: 8px;
    }
  `
  return (
    <React.Fragment>
      <div>
        <Title>
          NEWSLETTER <span>NOW</span>
        </Title>
        <Paragraph>
          There are many variations ofof reavalable, but the majority
        </Paragraph>
        <div>
          <Form className="row">
            <div className="col p-0">
              <input type="email" />
            </div>
            <button className=" col-2" onClick={(e) => e.preventDefault()}>
              <i className="bi bi-send" />
            </button>
          </Form>
        </div>
        <Networks>
          {FooterNewlettersElements.map(({ id, icone }) => (
            <a title={icone} href="#" key={id}>
              <i className={`bi bi-${icone}`}></i>
            </a>
          ))}
        </Networks>
      </div>
    </React.Fragment>
  )
}

export default FooterNewletters
