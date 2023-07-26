import React from 'react'
import Why from './Why'
import Formulaire from './Formulaire'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import { police } from '../../untils/police'

const Container = styled.div`
  @media (max-width: 767px) {
    padding: 60px 0;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 70px 0;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 80px 0;
  }
  padding: 120px 0;
`

const formulaireTitle = 'Request a Quote'
const formulaireSubmit = 'SUBMIT INQUIRY'

const formulaireStyle = styled.div`
  background-color: ${color.formulaireBacgroundCOlor};
  @media (max-width: 767px) {
    padding: 30px;
    margin-top: 30px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 30px;
  }
  padding: 65px 60px;
`

const formulaireSubmitBtn = styled.button`
  /*Revenir pour gérer l'animation du bouton */
  font-family: ${police.second};
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  width: 100%;
  padding: 5% 10%;
  color: white;
  background-color: ${color.main};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${color.second};
  }
`

const formulaireTitleStyle = styled.h2`
  font-weight: 600;
  color: ${color.whyTitleColor};
  font-family: ${police.main};
  text-align: center;
  @media (max-width: 767px) {
    margin-bottom: 2em;
    font-size: 24px;
    line-height: 37px;
  }
  font-size: 30px;
  line-height: 42px;
`

const formulaireHeadStyled = styled.div`
  margin-bottom: 10%;
`

const formulaireInputStyle = styled.input`
  width: 100%;
  border: solid 1px ${color.formulaireBorderColor};
  height: 50px;
  font-family: ${police.main};
  color: ${color.formulaireColor};
  margin-bottom: 5%;
  padding: 10px 20px;
  &:focus {
    outline-color: ${color.main};
  }
`

const formulaireTextareaStyle = styled.textarea`
  width: 100%;
  border: solid 1px ${color.formulaireBorderColor};
  height: 150px;
  font-family: ${police.main};
  color: ${color.formulaireColor};
  margin-bottom: 5%;
  padding: 20px;
  &:focus {
    outline-color: ${color.main};
  }
`

function Reasons() {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <Container>
            <div className="row">
              <div className="col-lg-6">
                <Why />
              </div>
              <div className="col">
                <Formulaire
                  FormulaireStyle={formulaireStyle}
                  title={formulaireTitle}
                  SubmitTitle={formulaireSubmit}
                  SubmitBtn={formulaireSubmitBtn}
                  Title={formulaireTitleStyle}
                  Head={formulaireHeadStyled}
                  condition="2"
                  Input={formulaireInputStyle}
                  Textarea={formulaireTextareaStyle}
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Reasons
