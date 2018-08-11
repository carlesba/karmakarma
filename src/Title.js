import React from 'react'

const Title = ({children}) => {
  return (
    <h1 style={{
      textAlign: 'right',
      margin: 0,
      transform: 'translateX(-45%) translateY(187%) rotate(90deg)',
      fontSize: '18vmin',
      position: 'absolute'
    }}>
      {children}
    </h1>
  )
}

export default Title
