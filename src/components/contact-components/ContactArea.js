import React from 'react'
import Formulaire from '../accueil-components/Formulaire'
import { color } from '../../untils/color'
import { styled } from 'styled-components'
import { police } from '../../untils/police'
import { TwoColors } from '../../untils/underline'
import OthersContact from './OthersContact'

const formulaireTitle = 'Get In Touch'
const formulaireSubmit = 'SEND'

const FormnulaireContainer = styled.section`
  position: relative;
`

const formulaireStyle = styled.div`
  width: 100%;
  position: relative;
  top: -20%;
  background-color: white;
  box-shadow: 0 0 10px ${color.feedbackBoxShadowColor};
  @media (max-width: 767px) {
    padding: 30px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 30px;
  }
  padding: 55px 70px;
`

const formulaireTitleStyle = styled.h3`
  font-weight: 600;
  color: ${color.second};
  font-family: ${police.main};
  text-align: left;
  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 30px;
  }
`

const formulaireHeadStyled = styled.div`
  margin-bottom: 10%;
`

const formulaireSubmitBtn = styled.button`
  /*Revenir pour gérer l'animation du bouton */
  font-family: ${police.second};
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  width: 50%;
  padding: 5% 10%;

  color: white;
  background-color: ${color.main};
  transition: background-color 0.5s;
  &:hover {
    color: white;
    background-color: ${color.second};
  }
  &:focus {
    color: white;
    background-color: ${color.second};
  }
`

const Underline = styled.div`
  @media (max-width: 479px) {
    width: 48%;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    width: 40%;
  }
  @media (min-width: 768px) {
    width: 35%;
  }
`

const formulaireInputStyle = styled.input`
  width: 100%;
  border: solid 1px rgba(0, 0, 0, 0.2);
  height: 50px;
  font-family: ${police.main};
  color: ${color.formulaireColor};
  margin-bottom: 5%;
  padding: 10px 20px;
  &:focus {
    outline-color: rgba(0, 0, 0, 0.2);
  }
`

const formulaireTextareaStyle = styled.textarea`
  width: 100%;
  border: solid 1px rgba(0, 0, 0, 0.2);
  height: 150px;
  font-family: ${police.main};
  color: ${color.formulaireColor};
  margin-bottom: 5%;
  padding: 20px;
  &:focus {
    outline-color: rgba(0, 0, 0, 0.2);
  }
`

function ContactArea() {
  return (
    <React.Fragment>
      <div className="container">
        <div>
          <section className="row">
            <FormnulaireContainer className="col-md">
              <Formulaire
                FormulaireStyle={formulaireStyle}
                title={formulaireTitle}
                SubmitTitle={formulaireSubmit}
                SubmitBtn={formulaireSubmitBtn}
                Title={formulaireTitleStyle}
                underline={
                  <Underline>
                    <TwoColors />
                  </Underline>
                }
                Head={formulaireHeadStyled}
                Input={formulaireInputStyle}
                Textarea={formulaireTextareaStyle}
              />
            </FormnulaireContainer>
            <div className="col">
              <OthersContact />
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactArea
