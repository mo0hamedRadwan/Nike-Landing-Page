import React from 'react'

type Props = {
  label: string, 
  iconURL?: string, 
  backgroundColor?: string, 
  borderColor?: string, 
  textColor?: string,
  fullWidth?: boolean,
}

const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}: Props) => {
  const style = {
    backgroundColor, 
    borderColor, 
    color: textColor
  }

  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 
    border border-coral-red font-montserrat text-lg leading-none 
    bg-coral-red text-white rounded-full ${(fullWidth) ? 'w-full' : ''}`}
      style={style}
    >
      {label}
      {iconURL && <img src={iconURL} className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button
