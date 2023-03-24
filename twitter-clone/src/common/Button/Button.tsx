import React, {FC} from "react";
import './Button.css'

interface Params {
  className?: string,
  value: string,
}

const SubmitButton: FC<Params> = ({className = '', value}: Params) => {
  return (
    <input
      type='submit'
      className={`button ${className || ''}`}
      value={value}
    />
  )
}

export default SubmitButton;
