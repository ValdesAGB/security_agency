import React from 'react'
import { logo, menuElements } from '../data'
import { Link } from 'react-router-dom'
import { police } from '../untils/police'
import { color } from '../untils/color'
import { styled } from 'styled-components'

function Header() {
  const ListLink = styled.ul`
    position: relative;
    left: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const LinkItems = styled(Link)`
    color: ${color.galleryBtnColor};
    padding: 35px 0;
    font-weight: 600;
    font-family: ${police.main};
    font-size: 14px;
    margin: 0 10px;
    &:hover {
      color: ${color.main};
    }
  `

  const Appointment = styled(Link)`
    border-radius: 50px;
    border: 1px solid ${color.main};
    padding: 10px 30px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    background-color: ${color.main};
    font-family: ${police.second};
  `
  return (
    <React.Fragment>
      <div className="row bg-body-tertiary">
        <div>
          <div className="container ">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                  <img src={logo} alt="logo" className="w-100" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
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
                    <li className="nav-item">
                      <Appointment to="/contact">Appointment</Appointment>
                    </li>
                  </ListLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
