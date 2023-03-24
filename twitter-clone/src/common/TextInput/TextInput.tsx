import {ErrorMessage, Field} from "formik";
import React, {FC} from "react";
import './TextInput.css'

interface Params {
  placeholder: string,
  type?: 'text' | 'password',
  name?: string,
  touched?: boolean,
  errors?: string
}

const TextInput: FC<Params> = ({
  placeholder,
  type = 'text',
  name,
  touched,
  errors
}: Params) => {
  return (
    <>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {touched && errors && <ErrorMessage name={name as string} />}
    </>
  )
}

export default TextInput;
