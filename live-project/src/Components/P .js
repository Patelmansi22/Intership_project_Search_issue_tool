import React from 'react'

const P = ({className, name,onClick,style}) => {
  return (
      <p className={className} onClick={onClick} style={{style}}  > {name} </p>
  )
}

export default P