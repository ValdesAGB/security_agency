import React from 'react'
import { logo, menuElements } from '../data'
import { Link } from 'react-router-dom'
import { police } from '../untils/police'
import { color } from '../untils/color'
import { styled } from 'styled-components'
import AppointmentBtn from './AppointmentBtn'

const Navigation = styled.div`
  @media (max-width: 991px) {
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 3;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

const ButtonOpenAndClosed = styled.button`
  border: none !important;
  &:focus {
    outline: none !important;
  }
`

const ListLink = styled.ul`
  position: relative;
  @media (max-width: 991px) {
    margin: 10px 0;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    left: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1200px) and (max-width: 1399px) {
    left: 23%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1400px) {
    left: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const LinkItems = styled(Link)`
  color: ${color.galleryBtnColor};
  font-weight: 600;
  font-family: ${police.main};
  font-size: 14px;
  &:hover {
    color: ${color.main};
  }
  @media (max-width: 991px) {
    margin-bottom: 5px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 35px 0;
    margin-right: 20px;
  }

  @media (min-width: 1200px) {
    padding: 35px 0;
    margin-right: 30px;
  }
`

function Header() {
  return (
    <React.Fragment>
      <Navigation className="row">
        <div>
          <div className="container p-0">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                  <img src={logo} alt="logo" className="w-100" />
                </Link>
                <ButtonOpenAndClosed
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </ButtonOpenAndClosed>
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ListLink className="navbar-nav">
                    {menuElements.map(({ id, title }) => (
                      <li className="nav-item" key={id}>
                        <LinkItems
                          to={`/${title === 'home' ? '' : title}`}
                          className="nav-link"
                        >
                          {title.toUpperCase()}
                        </LinkItems>
                      </li>
                    ))}

                    <AppointmentBtn />
                  </ListLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Navigation>
    </React.Fragment>
  )
}

export default Header
