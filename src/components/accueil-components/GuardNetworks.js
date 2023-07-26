import React from 'react'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import { NetworksElements } from '../../data'

function GuardNetworks({ container }) {
  const Networks = styled.div`
    background-color: ${color.homeTitle};
    transition: background-color 0.4s;
    ${container}:hover & {
      background-color: ${color.main};
    }
  `

  const List = styled.ul`
    border-top: 2px solid ${color.formulaireBacgroundCOlor};
    padding: 5% 0;
    transition: border-top 0.4s;
    ${container}:hover & {
      border-top: 2px solid white;
    }
    li {
      text-align: center;
      font-size: 14px;
      margin: 0 5%;
    }
  `

  const ListItemLink = styled.a`
    color: ${color.guardNetworksColor};
    transition: color 0.4s 0.2s;
    ${container}:hover & {
      color: white;
    }
  `

  return (
    <React.Fragment>
      <Networks>
        <List className="list-inline">
          {NetworksElements.map(({ id, icone }) => (
            <li className="list-inline-item" key={id}>
              <ListItemLink href="#">
                <i className={`bi bi-${icone}`}></i>
              </ListItemLink>
            </li>
          ))}
        </List>
      </Networks>
    </React.Fragment>
  )
}

export default GuardNetworks
