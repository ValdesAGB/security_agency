import React from 'react'
import CardService from '../CardService'
import { styled } from 'styled-components'

function ServicesCard({ array, level }) {
  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8% 2%;
  `
  return (
    <React.Fragment>
      <Container>
        {array.slice(0, level).map(({ id, cover, title }) => (
          <CardService id={id} cover={cover} title={title} key={id} />
        ))}
      </Container>
    </React.Fragment>
  )
}

export default ServicesCard
