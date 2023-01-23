import {ErrorMessage, Field} from "formik";
import React, {FC} from "react";
import './TextInput.css'

const TextInput: FC<{
  placeholder: string,
  type?: 'text' | 'password',
  name?: string,
  touched?: boolean,
  errors?: string
}> = (props) => {
  const {touched, errors, name} = props
  return (
    <>
      <Field
        name={name}
        type={props.type || 'text'}
        placeholder={props.placeholder}
      />
      {touched && errors && <ErrorMessage name={name as string} />}
    </>
  )
}

export default TextInput;
