import React from 'react'
import styled from 'styled-components'
import pose from 'react-pose'

const Display = pose.div({
  current: { top: 0, opacity: 1},
  above: { top: '30vh', opacity: 0},
  bellow: { top: '-30vh', opacity: 0}
})


const StyledDisplay = styled(Display)`
  font-size: 33vh;
  height: 60vh;
  line-height: 60vh;
  text-align: center;
  user-select: none;
  position: absolute;
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #333;
  z-index: 10;
  transition: transform ease-out 200ms;
  &.current {
    transform: rotate(0);
  }
  &.above {
    transform: rotateX(90deg);
  }
  &.bellow {
    transform: rotateX(-90deg);
  }
`
StyledDisplay.displayName = 'Display'

const DisplayCount = ({count, position}) =>
  <StyledDisplay pose={position} className={position}>{parseCount(count)}</StyledDisplay>

const parsePositives = number => `+${number}`

const parseCount = number => number > 0 ? parsePositives(number)
  : number === 0 ? ` ${number}` : number

export default ({count}) =>
  <React.Fragment>
    <DisplayCount key={count + 1} position='bellow' count={count+1} />
    <DisplayCount key={count} position='current' count={count} />
    <DisplayCount key={count - 1} position='above' count={count -1} />
  </React.Fragment>
