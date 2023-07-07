import React, { useContext } from 'react'
import { AllServicesElements } from '../../data'
import { styled } from 'styled-components'
import { police } from '../../untils/police'
import { color } from '../../untils/color'
import { LoadingContext, ServiceDetailsContext } from '../../untils/context'

function DetailsBtn() {
  const { setService, activeService, setActiveService } = useContext(
    ServiceDetailsContext
  )
  const { setLoad } = useContext(LoadingContext)

  const Button = styled.button`
    border: none;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    font-family: ${police.second};
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
    background-color: ${(props) =>
      props.active ? color.main : color.serviceDetailsBtnBgColor};
    color: ${(props) => (props.active ? 'white' : color.five)};
    transition: color 0.3s;
    &:hover {
      color: ${(props) => (props.active ? 'white' : color.main)};
    }
  `
  const handleServiceClick = (serviceData) => {
    setActiveService(serviceData)
    setLoad(true)
    setTimeout(() => {
      setService(serviceData)
      setLoad(false)
    }, 300)
  }

  return (
    <React.Fragment>
      <div>
        {AllServicesElements.map(({ id, title, cover }) => (
          <Button
            key={id}
            active={activeService.id === id}
            onClick={() => handleServiceClick({ id, title, cover })}
          >
            {title}
          </Button>
        ))}
      </div>
    </React.Fragment>
  )
}

export default DetailsBtn
