import React from 'react'
import CardService from '../CardService'
import { styled } from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8% 2%;
  @media (max-width: 767px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 20px;
  }
`

function ServicesCard({ array, level }) {
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
