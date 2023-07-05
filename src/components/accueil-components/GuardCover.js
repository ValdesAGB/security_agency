import React from 'react'
import { styled } from 'styled-components'

function GuardCover({ container, cover, name }) {
  const Container = styled.div`
    overflow: hidden;
  `

  const Cover = styled.img`
    transition: transform 0.4s;
    width: 100%;
    height: 100%;
    object-fit: cover;

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
