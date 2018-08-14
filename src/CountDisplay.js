import React from 'react'
import styled from 'styled-components'

const Display = styled.div`
  font-size: 33vh;
  height: 55vh;
  line-height: 50vh;
  text-align: center;
  user-select: none;
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #333;
  z-index: 10;
`

Display.displayName = 'Display'

const parsePositives = number => `+${number}`

const parseCount = number => number > 0 ? parsePositives(number)
  : number === 0 ? ` ${number}` : number

export default ({count}) =>
  <Display>{parseCount(count)}</Display>
