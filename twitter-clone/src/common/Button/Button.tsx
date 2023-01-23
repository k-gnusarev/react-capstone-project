import React, {FC} from "react";
import './Button.css'

const SubmitButton: FC<{
  className?: string,
  value: string,
}> = (props) => {
  return (
    <input
      type='submit'
      className={`button ${ props.className || ''}`}
      value={props.value}
    />
  )
}

export default SubmitButton;
