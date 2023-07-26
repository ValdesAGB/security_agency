import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  overflow: hidden;
`

function GuardCover({ container, cover, name }) {
  const Cover = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;
    ${container}:hover & {
      transform: scale(1.15) rotate(5deg);
    }
  `

  return (
    <React.Fragment>
      <Container>
        <Cover src={cover} alt={name} />
      </Container>
    </React.Fragment>
  )
}

export default GuardCover
