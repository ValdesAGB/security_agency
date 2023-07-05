import React, { useContext } from 'react'
import { keyframes, styled } from 'styled-components'
import { police } from '../../untils/police'
import { color } from '../../untils/color'
import { GalleryContext, LoadingContext } from '../../untils/context'
import LoadingAnimation from '../../untils/Loader'

function GallerieContent() {
  const { gallery } = useContext(GalleryContext)
  const { load } = useContext(LoadingContext)

  const moveRight = keyframes`
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  `

  const moveLeft = keyframes`
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(0);
  }
`

  const moveTop = keyframes`
from {
  transform: translateY(100%);
}
to {
  transform: translateY(0);
}
`

  const Content = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    margin: 5% 0;
  `

  const CoverContainer = styled.div`
    position: relative;
    margin: 2%;
  `

  const Cover = styled.img`
    position: relative;
    z-index: 0;
  `

  const Hover = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.4s;
    ${CoverContainer}:hover & {
      opacity: 1;
    }
  `

  const HoverContent = styled.div`
    width: 100%;
  `

  const IconeContainer = styled.a`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.main};
    transition: background-color 0.5s;
    &:hover {
      background-color: white;
    }
    ${CoverContainer}:hover & {
      animation: 0.8s
        ${(props) => (props.side === 'left' ? moveRight : moveLeft)};
    }
  `
  const HoverIconeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 5%;
  `

  const Icone = styled.i`
    font-size: 1.3em;
    color: white;
    transition: color 0.5s;
    ${IconeContainer}:hover & {
      color: ${color.five};
    }
  `

  const Description = styled.div`
    font-family: ${police.second};
    text-align: center;
    color: white;
    font-weight: 600;
    ${CoverContainer}:hover & {
      animation: 0.8s ${moveTop};
    }
  `

  const LoadingContainer = styled.div`
    text-align: center;
  `

  return (
    <React.Fragment>
      <Content>
        {load ? (
          <LoadingContainer>
            <LoadingAnimation />
          </LoadingContainer>
        ) : (
          gallery.map(({ id, cover }) => (
            <CoverContainer key={id}>
              <Cover src={cover} alt={id} className="w-100" />
              <Hover>
                <HoverContent>
                  <HoverIconeContainer>
                    <IconeContainer href={cover} side="left">
                      <Icone className="bi bi-search" />
                    </IconeContainer>
                    <IconeContainer href="#">
                      <Icone className="bi bi-link-45deg" />
                    </IconeContainer>
                  </HoverIconeContainer>

                  <Description>Home Service</Description>
                </HoverContent>
              </Hover>
            </CoverContainer>
          ))
        )}
      </Content>
    </React.Fragment>
  )
}

export default GallerieContent
