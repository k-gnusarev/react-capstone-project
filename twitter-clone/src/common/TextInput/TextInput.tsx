import React, { FC } from "react";
import './TextInput.css'

const TextInput: FC<{
  placeholder: string,
  type?: 'text' | 'password',
  id?: string
}> = (props) => {
  return (
    <input
      id={props.id}
      type={props.type || 'text'}
      placeholder={props.placeholder}
    />
  )
}

export default TextInput;
