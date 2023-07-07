import { styled } from 'styled-components'
import { color } from '../color'

const ColorLine = styled.div`
  width: 100%;
  height: 2px;
  display: flex;
`

const ColorLinePart = styled.div`
  flex-grow: 1;
`

const SecondColorPart = styled(ColorLinePart)`
  background-color: ${color.second};
`

const MainColorPart = styled(ColorLinePart)`
  background-color: ${color.main};
`

export const TwoColors = () => {
  return (
    <ColorLine>
      <SecondColorPart />
      <MainColorPart />
    </ColorLine>
  )
}

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2.5% 0;
`

const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4px;
`

const RedSection = styled.div`
  flex: 2;
  height: 50%;
  background-color: ${color.main};
`

const BlackSection = styled.div`
  flex: 2;
  height: 80%;

  background-color: ${color.second};
`

export const BetweenBold = () => {
  return (
    <CenteredWrapper>
      <LineWrapper>
        <RedSection />
        <BlackSection />
        <RedSection />
      </LineWrapper>
    </CenteredWrapper>
  )
}
