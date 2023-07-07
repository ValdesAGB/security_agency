import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CardService from '../CardService'
import { styled } from 'styled-components'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
}

const Container = styled.div`
  padding: 2% 5%;
`

function ServiceSlider({ array, level }) {
  return (
    <React.Fragment>
      <Slider {...settings}>
        {array.slice(0, level).map(({ id, cover, title }) => (
          <Container key={id}>
            <CardService id={id} cover={cover} title={title} />
          </Container>
        ))}
      </Slider>
    </React.Fragment>
  )
}

export default ServiceSlider
