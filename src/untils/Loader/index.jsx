import React from 'react'
import styled, { keyframes } from 'styled-components'
import { color } from '../color'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoaderContainer = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid ${color.main};
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: ${spin} 2s linear infinite;
`

const LoadingAnimation = () => <LoaderContainer />

export default LoadingAnimation
