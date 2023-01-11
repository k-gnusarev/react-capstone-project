import React, {FC} from "react";
import './Button.css'

const Button: FC<{
  className?: string,
  type: 'button' | 'submit',
  value: string,
  onClick: (e: any) => any
}> = (props) => {
  return (
    <input
      type={props.type || 'button'}
      className={`button ${ props.className || ''}`}
      value={props.value}
      onClick={props.onClick}
    />
  )
}

export default Button;
