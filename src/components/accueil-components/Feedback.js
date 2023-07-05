import React, { useState } from 'react'
import { styled } from 'styled-components'
import { BetweenBold } from '../../untils/underline'
import { color } from '../../untils/color'
import { police } from '../../untils/police'
import { FeedbackElements } from '../../data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Feedback() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = (current) => {
    setCurrentSlide(current)
  }

  const CustomCarousselDots = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => (props.active ? color.main : color.second)};
    margin-top: 250%;
  `

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    customPaging: (i) => <CustomCarousselDots active={i === currentSlide} />,
    swipe: (current) => handleSlideChange(current),
  }

  const ContainerSection = styled.div`
    margin-top: 10%;
    margin-bottom: 10%;
  `

  const Head = styled.div`
    text-align: center;
    h1 {
      font-family: ${police.main};
      color: ${color.second};
      font-size: 36px;
      line-height: 42px;
      font-weight: 700;
    }
    p {
      font-family: ${police.second};
      line-height: 25px;
      font-size: 14px;
      color: ${color.five};
      margin-bottom: 4%;
    }
  `

  const Container = styled.div`
    padding: 2% 5%;
  `

  const Content = styled.div`
    padding: 40px 30px;
    box-shadow: 0 0 10px ${color.feedbackBoxShadowColor};
  `

  const Paragraph = styled.p`
    color: ${color.feedbackPagraphColor};
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 28px;
    text-align: left;
    font-family: ${police.second};
  `

  const Name = styled.h4`
    font-weight: 600;
    font-size: 16px;
    color: ${color.feedbackNameColor};
    margin-bottom: 2px;
    font-family: ${police.main};
  `

  const Customer = styled.span`
    color: ${color.feedbackNameColor};
    font-size: 14px;
    font-family: ${police.second};
  `

  return (
    <React.Fragment>
      <section>
        <ContainerSection className="container">
          <Head className="row justify-content-center">
            <h1>Our Clients Say</h1>
            <BetweenBold />
            <p className="col-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore
            </p>
          </Head>
          <Slider {...settings}>
            {FeedbackElements.map(({ id, cover, name }) => (
              <Container key={id}>
                <Content className="row">
                  <div className="col-3">
                    <img src={cover} alt={name} className="w-100" />
                  </div>
                  <div className="col">
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipisicill elit,
                      sed do eiusmo tempor incididunt ut labore etll dolore
                      magna aliqua Ut enim.
                    </Paragraph>
                    <div>
                      <Name>{name}</Name>
                      <Customer>Customer</Customer>
                    </div>
                  </div>
                </Content>
              </Container>
            ))}
          </Slider>
        </ContainerSection>
      </section>
    </React.Fragment>
  )
}

export default Feedback
