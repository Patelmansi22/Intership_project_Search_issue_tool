import React from 'react'

const Button = ({type, className,onClick,name}) => {
  return (
  <button type={type} className={className} onClick={onClick}>{name}</button>

  )
}

export default Button