import React from 'react'
import Formulaire from '../accueil-components/Formulaire'
import { color } from '../../untils/color'
import { styled } from 'styled-components'
import { police } from '../../untils/police'
import { TwoColors } from '../../untils/underline'
import OthersContact from './OthersContact'

function ContactArea() {
  const formulaireTitle = 'Get In Touch'
  const formulaireSubmit = 'SEND'

  const FormnulaireContainer = styled.section`
    position: relative;
  `

  const formulaireStyle = styled.div`
    padding: 55px 70px;
    position: relative;
    top: -20%;
    background-color: white;
    box-shadow: 0 0 10px ${color.feedbackBoxShadowColor};
  `

  const formulaireTitleStyle = styled.h2`
    font-weight: 600;
    color: ${color.second};
    font-size: 30px;
    font-family: ${police.main};
    text-align: left;
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

  return (
    <React.Fragment>
      <div className="container">
        <div>
          <section className="row">
            <FormnulaireContainer className="col">
              <Formulaire
                FormulaireStyle={formulaireStyle}
                title={formulaireTitle}
                SubmitTitle={formulaireSubmit}
                SubmitBtn={formulaireSubmitBtn}
                Title={formulaireTitleStyle}
                underline={
                  <div className="col-12">
                    <TwoColors />
                  </div>
                }
                Head={formulaireHeadStyled}
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
