import React from 'react'
import Why from './Why'
import Formulaire from './Formulaire'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import { police } from '../../untils/police'

function Reasons() {
  const Container = styled.div`
    margin: 10% 0;
  `

  const formulaireStyle = styled.div`
    background-color: ${color.formulaireBacgroundCOlor};
    padding: 65px 60px;
  `
  const formulaireTitle = 'Request a Quote'
  const formulaireSubmit = 'SUBMIT INQUIRY'
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
      color: white;
      background-color: ${color.second};
    }
    &:focus {
      color: white;
      background-color: ${color.second};
    }
  `
  const formulaireTitleStyle = styled.h2`
    font-weight: 600;
    color: ${color.whyTitleColor};
    font-size: 30px;
    font-family: ${police.main};
    text-align: center;
  `

  const formulaireHeadStyled = styled.div`
    margin-bottom: 10%;
  `

  return (
    <React.Fragment>
      <section>
        <div className="container">
          <Container>
            <div className="row">
              <div className="col">
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
