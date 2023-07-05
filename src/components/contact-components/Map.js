import React from 'react'
import { styled } from 'styled-components'

function Map() {
  const MapContainer = styled.div`
    padding: 0;
  `
  const Carte = styled.iframe`
    width: 100%;
    height: 80vh;
  `
  return (
    <React.Fragment>
      <MapContainer>
        <Carte
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3024.2378576203037!2d-74.00854892494311!3d40.7127800375694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sfr!2sbj!4v1688449881470!5m2!1sfr!2sbj"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </MapContainer>
    </React.Fragment>
  )
}

export default Map
