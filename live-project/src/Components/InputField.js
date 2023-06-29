import React from 'react'

const InputField = ({type,className,id,ariaDescribedby,value,onChange,ariaLabel,placeholder,style}) => {
  return (
    <>

    <input type={type} placeholder={placeholder} class={className} id={id} aria-describedby={ariaDescribedby} value={value} onChange={onChange} aria-label={ariaLabel} style={{style}}/>
</>
  )
}

export default InputField