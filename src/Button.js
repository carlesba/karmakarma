import React from 'react'

const getStyles = ({reverse, color}) => ({
  borderRadius: '50px',
  width: '80vmin',
  height: '20vh',
  backgroundColor: color,
  transform: reverse ? 'rotate(180deg)' : '',
  margin: 'auto'
})

const Button = ({reverse, color, ...rest}) => {
  return (
    <div {...rest} style={getStyles({reverse, color})} />
  )
}

export default Button