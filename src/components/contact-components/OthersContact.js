import React from 'react'
import { styled } from 'styled-components'
import { police } from '../../untils/police'
import { color } from '../../untils/color'
import { TwoColors } from '../../untils/underline'
import { OthersContactElements } from '../../data'

function OthersContact() {
  const Head = styled.div`
    h3 {
      font-family: ${police.main};
      color: ${color.second};
      font-size: 30px;
      line-height: 42px;
      font-weight: 600;
    }
  `

  const Container = styled.div`
    padding: 10% 15%;
  `

  const ContainerData = styled.div`
    margin-top: 10%;
  `

  const IconeContainer = styled.div`
    border-radius: 50%;
    border: 1px solid ${color.main};
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.8s;
    &:hover {
      background-color: ${color.main};
    }
  `
  const Icone = styled.i`
    font-size: 1.5em;
    color: ${color.main};
    transition: background-color 0.9s;
    ${IconeContainer}:hover & {
      color: white;
    }
  `

  const Data = styled.p`
    a {
      text-decoration: none;
      font-family: ${police.second};
      font-size: 14px;
      color: ${color.five};
      transition: color 0.3s;
      &:hover {
        color: ${color.main};
      }
    }
  `
  return (
    <React.Fragment>
      <Container>
        <Head>
          <h3>Contact Us</h3>
          <TwoColors />
        </Head>
        <ContainerData>
          {OthersContactElements.map(
            ({ id, icone, data, data1, data2, href }) => (
              <ul key={id} className="list-unstyled">
                <li>
                  <div className="row">
                    <IconeContainer className="col-3">
                      <Icone className={`bi  bi-${icone}`} />
                    </IconeContainer>
                    <Data className="col-8">
                      {!data ? (
                        <>
                          <a
                            target="_blank"
                            href={
                              id === '2' ? `mailto:${data1}` : `tel:${data2}`
                            }
                          >
                            {data1}
                          </a>
                          <br />
                          <a
                            target="_blank"
                            href={
                              id === '2' ? `mailto:${data2}` : `tel:${data2}`
                            }
                          >
                            {data2}
                          </a>
                        </>
                      ) : (
                        <a target="_blank" href={href}>
                          {data}
                        </a>
                      )}
                    </Data>
                  </div>
                </li>
              </ul>
            )
          )}
        </ContainerData>
      </Container>
    </React.Fragment>
  )
}

export default OthersContact