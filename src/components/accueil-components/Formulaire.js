import React from 'react'
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
  Input,
  Textarea,
}) {
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
            <Textarea
              required
              placeholder="Votre message*"
              id="text"
            ></Textarea>
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
