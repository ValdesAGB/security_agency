import React, { useState } from 'react'
import { styled } from 'styled-components'
import { BetweenBold } from '../../untils/underline'
import { color } from '../../untils/color'
import { police } from '../../untils/police'
import { FeedbackElements } from '../../data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CustomCarousselDots = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? color.main : color.second)};
  margin-top: 250%;
`

const ContainerSection = styled.div`
  @media (max-width: 479px) {
    padding-bottom: 100px;
    padding-top: 60px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    padding-bottom: 70px;
    padding-top: 60px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-bottom: 70px;
    padding-top: 70px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding-bottom: 80px;
    padding-top: 80px;
  }
  padding-bottom: 120px;
  padding-top: 120px;
`

const Head = styled.div`
  text-align: center;
  h2 {
    font-family: ${police.main};
    color: ${color.second};
    font-weight: 700;
    @media (max-width: 767px) {
      font-size: 30px;
      line-height: 37px;
    }
  }
  p {
    font-family: ${police.second};
    line-height: 25px;
    font-size: 14px;
    color: ${color.five};
    margin-bottom: 25px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    max-width: 470px;
  }
`

const Underline = styled.div`
  @media (max-width: 479px) {
    width: 40%;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    width: 30%;
  }
  @media (min-width: 768px) {
    width: 20%;
  }
  @media (min-width: 1200px) {
    width: 15%;
  }
`

const Container = styled.div`
  @media (max-width: 767px) {
    padding: 5px 15px;
  }
  padding: 8px;
  @media (min-width: 1400px) {
    padding: 5px 20px;
  }
`

const Content = styled.div`
  @media (max-width: 767px) {
    padding: 40px 30px;
  }
  padding: 40px 10px;
  margin: 0;
  box-shadow: 0 0 10px ${color.feedbackBoxShadowColor};
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`

const Cover = styled.img`
  @media (max-width: 479px) {
    margin: 0 auto 20px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    margin-bottom: 20px;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
  @media (min-width: 1400px) {
    margin: 0 auto 0;
    width: 80%;
  }
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
  @media (max-width: 767px) {
    line-height: 26px;
  }
`

const Customer = styled.span`
  color: ${color.feedbackNameColor};
  font-size: 14px;
  font-family: ${police.second};
`

function Feedback() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = (current) => {
    setCurrentSlide(current)
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    customPaging: (i) => <CustomCarousselDots active={i === currentSlide} />,
    swipe: (current) => handleSlideChange(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <React.Fragment>
      <section>
        <ContainerSection className="container">
          <Head className="row justify-content-center">
            <h2>Our Clients Say</h2>
            <Underline>
              <BetweenBold />
            </Underline>
            <div className="">
              <p className="text-center ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </Head>
          <Slider {...settings}>
            {FeedbackElements.map(({ id, cover, name }) => (
              <Container key={id}>
                <Content className="row">
                  <div className="col-md-4 col-lg-3">
                    <Cover src={cover} alt={name} />
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
