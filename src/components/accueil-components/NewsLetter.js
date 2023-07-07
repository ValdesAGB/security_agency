import React from 'react'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import { police } from '../../untils/police'

const bgImage =
  'https://demo.hasthemes.com/safzon-preview/assets/images/bg/bg-01.png'
const Section = styled.section`
  background: url(${bgImage}) center center / cover no-repeat;
  position: relative;
`

const SubTitle = styled.h4`
  color: #ffffff;
  font-weight: 500;
  font-family: ${police.main};
  text-align: left;
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 26px;
  }
  font-size: 24px;
  line-height: 30px;
`

const Title = styled.h2`
  color: #ffffff;
  font-weight: 600;

  font-family: ${police.main};
  text-align: left;
  @media (max-width: 767px) {
    font-size: 24px;
    margin-bottom: 20px;
    line-height: 28px;
  }
  font-size: 36px;
  line-height: 42px;
  @media (min-width: 768px) and (maw-width: 991px) {
    margin-bottom: 25px;
  }
`

const Container = styled.div`
  position: relative;
  padding: 80px 0 50px 0;
`

const Content = styled.div`
  position: relative;
  z-index: 2;
`

const InputAndBtnContainer = styled.div`
  @media (max-width: 767px) {
    margin-top: 5%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 3%;
  }
`

const Input = styled.input`
  width: 100%;
  border: solid 0.5px ${color.formulaireBorderColor};
  border-radius: 5px;
  height: 50px;
  line-height: 50px;
  font-family: ${police.main};
  color: ${color.formulairePlaceholderColor};
  background-color: transparent;
  margin-bottom: 5%;
  padding: 10px 20px;
  font-style: italic;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${color.formulairePlaceholderColor};
  }
`

const HoverDiv = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`

const SubmitBtn = styled.button`
  /*Revenir pour gérer l'animation du bouton */
  font-family: ${police.second};
  border-radius: 5px;
  border: none;
  height: 50px;
  color: white;
  background-color: ${color.main};
  font-weight: 600;
  transition: background-color 0.5s;
  &:hover {
    color: white;
    background-color: ${color.second};
  }
  &:focus {
    color: white;
    background-color: ${color.second};
  }
  @media (max-width: 575px) {
    margin-left: 4%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    margin-left: 2%;
  }
`

function NewsLetter() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <Container>
            <Content className="row align-items-center">
              <div className="col-lg-7 col-xl">
                <SubTitle>Join Our volunteer</SubTitle>
                <Title>Subscribe Our Newsletter.</Title>
              </div>
              <InputAndBtnContainer className="col  ">
                <div className="row">
                  <div className="col-md-9 col-lg-7 col-xl-8">
                    <Input
                      type="email"
                      required
                      placeholder="Enter Your Email*"
                      id="name"
                    />
                  </div>

                  <SubmitBtn
                    type="submit"
                    onClick={(e) => e.preventDefault()}
                    className="col-6 col-sm-4 col-md-3 col-lg"
                  >
                    SUSCRIBE
                  </SubmitBtn>
                </div>
              </InputAndBtnContainer>
            </Content>
          </Container>
        </div>
        <HoverDiv />
      </Section>
    </React.Fragment>
  )
}

export default NewsLetter
