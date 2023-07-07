import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import { police } from '../untils/police'
import SubHeader from './SubHeader'

const Appointment = styled(Link)`
  text-align: center;
  border-radius: 50px;
  border: 1px solid ${color.main};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  background-color: ${color.main};
  font-family: ${police.second};
  @media (max-width: 991px) {
    padding: 5px 0px;
  }
  padding: 10px 30px;
`

const Section = styled.section`
  padding: 10px 0px 5px 0;
  @media (min-width: 992px) {
    display: none;
  }
`

const AnyQuestion = styled.h3`
  color: ${color.galleryBtnColor};
  font-size: 14px;
  font-family: ${police.second};
  a {
    text-decoration: none;
    color: ${color.galleryBtnColor};
  }

  text-align: center;
  font-weight: 400;
  margin-bottom: 20px;
`
const IconeList = styled.ul`
  li {
    margin: 0 10px;
  }
  padding: 0;
  margin-bottom: 20px;
`

const LinkIcone = styled.a`
  text-decoration: none;
  color: ${color.galleryBtnColor};
  transition: color 0.3s;
  &:hover {
    color: ${color.main};
  }
  i {
    font-size: 16px;
  }
`

function AppointmentBtn() {
  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <SubHeader
          Section={Section}
          AnyQuestion={AnyQuestion}
          IconeList={IconeList}
          LinkIcone={LinkIcone}
          AnyQuestionClassName=""
          IconeListClassName="text-center"
          AnyQuestionAndIconeListContainerClassName=""
        />
        <Appointment
          to="/contact"
          className="col-5 col-sm-4 col-md-3 col-lg-12"
        >
          Appointment
        </Appointment>
      </div>
    </React.Fragment>
  )
}

export default AppointmentBtn
