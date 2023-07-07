import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { police } from '../../untils/police'
import { color } from '../../untils/color'
import LoadingAnimation from '../../untils/Loader'
import { LoadingContext, ServiceDetailsContext } from '../../untils/context'

const Title = styled.h4`
  font-weight: 600;
  margin-bottom: 15px;
  margin-top: 15px;
  color: ${color.second};
  font-family: ${police.main};
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 26px;
  }
  font-size: 24px;
  line-height: 30px;
`

const Paragaph = styled.p`
  line-height: 25px;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  visibility: visible;
  font-family: ${police.second};
  color: ${color.five};
`

function DetailsContent() {
  const { service } = useContext(ServiceDetailsContext)
  const { load } = useContext(LoadingContext)

  const DataContainer = styled.div`
    display: ${load && 'flex'};
    justify-content: center;
    align-items: center;
  `
  return (
    <React.Fragment>
      <DataContainer>
        {load ? (
          <LoadingAnimation />
        ) : (
          <>
            <img src={service.cover} alt="1" className="w-100" />
            <Title>{service.title}</Title>
            <div>
              <Paragaph>
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters be distracted by the readable content of
                a page when looking at its layout.
              </Paragaph>
              <Paragaph>
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters be distracted by the readable content of
                a page when looking at its layout.
              </Paragaph>
              <Paragaph>
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters be distracted by the readable content of
                a page when looking at its layout.
              </Paragaph>
            </div>
          </>
        )}
      </DataContainer>
    </React.Fragment>
  )
}

export default DetailsContent
