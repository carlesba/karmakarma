import React from 'react'

const Count = ({children}) => {
  return (
    <div style={{
      margin: 'auto',
      fontWeigth: 'bold',
      textAlign: 'center',
      fontSize: '60vh',
      lineHeight: '1em',
      userSelect: 'none',
      position: 'relative',
      zIndex: -1
    }}>
      {children}
    </div>
  )
}

export default Count