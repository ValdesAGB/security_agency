import React, { useContext, useEffect } from 'react'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import { police } from '../untils/police'
import { Link } from 'react-router-dom'
import { ServiceDetailsContext } from '../untils/context'

const Card = styled.div`
  border: none;
  background-color: white;
  border-radius: 0px;
  .card-img-top {
    border-radius: 0px;
  }
  .card-body {
    margin: 5% 0;
  }
`

const Title = styled(Link)`
  color: ${color.six};
  font-family: ${police.main};
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
  transition: color 0.5s;
  &:hover {
    color: ${color.main};
  }
`

const Paragraph = styled.p`
  color: ${color.sept};
  font-family: ${police.second};
  font-size: 14px;
  margin: 5% 0;
`
const ReadBtn = styled(Link)`
  color: ${color.huit};
  font-family: ${police.main};
  font-size: 14px;
  border: none;
  text-decoration: none;
  background-color: transparent;
  font-weight: 600;
  transition: color 0.5s;
  &:hover {
    color: ${color.main};
  }
`

function CardService({ id, cover, title }) {
  const { setService, setActiveService } = useContext(ServiceDetailsContext)

  const handleSetService = () => {
    const serviceData = {
      id: id,
      cover: cover,
      title: title,
    }
    setActiveService(serviceData)
    setService(serviceData)
  }

  return (
    <React.Fragment>
      <Card className="card">
        <Link onClick={handleSetService} to="/service-details" href="#">
          <img src={cover} className="card-img-top" alt={title} />
        </Link>
        <div className="card-body">
          <Title
            onClick={handleSetService}
            to="/service-details"
            className="card-title"
          >
            {title}
          </Title>
          <Paragraph className="card-text">
            Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor
            incidid
          </Paragraph>
          <ReadBtn onClick={handleSetService} to="/service-details">
            READ MORE
          </ReadBtn>
        </div>
      </Card>
    </React.Fragment>
  )
}

export default CardService
