import React from 'react'

const Label = ({htmlFor, className,name}) => {
  return (
    <label htmlFor={htmlFor} className={className}>{name}</label>

  )
}

export default Label