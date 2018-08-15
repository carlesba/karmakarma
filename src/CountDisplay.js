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
  height: 55vh;
  line-height: 50vh;
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
Display.displayName = 'Display'

const parsePositives = number => `+${number}`

const parseCount = number => number > 0 ? parsePositives(number)
  : number === 0 ? ` ${number}` : number

export default ({count}) =>
<React.Fragment>
  <StyledDisplay key={count - 1} className='above' pose='above'>{parseCount(count - 1)}</StyledDisplay>
  <StyledDisplay key={count} className='current' pose='current'>{parseCount(count)}</StyledDisplay>
  <StyledDisplay key={count + 1} className='bellow' pose='bellow'>{parseCount(count + 1)}</StyledDisplay>
</React.Fragment>
