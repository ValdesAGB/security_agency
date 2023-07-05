import React from 'react'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import { police } from '../../untils/police'
import { formulaireInputElements } from '../../data'

function Formulaire({
  title,
  FormulaireStyle,
  SubmitBtn,
  SubmitTitle,
  underline,
  Title,
  Head,
  condition,
}) {
  const Input = styled.input`
    width: 100%;
    border: solid 1px ${color.formulaireBorderColor};
    height: 50px;
    font-family: ${police.main};
    color: ${color.formulaireColor};
    margin-bottom: 5%;
    padding: 10px 20px;
    &:focus {
      outline: none;
    }
  `

  const Textarea = styled.textarea`
    width: 100%;
    border: solid 1px ${color.formulaireBorderColor};
    height: 150px;
    font-family: ${police.main};
    color: ${color.formulaireColor};
    margin-bottom: 5%;
    padding: 10px 20px;
    &:focus {
      outline: none;
    }
  `

  return (
    <React.Fragment>
      <FormulaireStyle>
        <Head>
          <Title>{title}</Title>
          {underline ? underline : null}
        </Head>

        <form>
          {formulaireInputElements.map(({ id, type, placeholder }) => (
            <div className="mb-3" key={id}>
              {id === condition ? null : (
                <Input
                  type={type}
                  required
                  placeholder={`${placeholder}*`}
                  id={id}
                />
              )}
            </div>
          ))}

          <div className="mb-3">
            <Textarea required placeholder="Your message*" id="text"></Textarea>
          </div>

          <SubmitBtn type="submit" onClick={(e) => e.preventDefault()}>
            {SubmitTitle}
          </SubmitBtn>
        </form>
      </FormulaireStyle>
    </React.Fragment>
  )
}

export default Formulaire
