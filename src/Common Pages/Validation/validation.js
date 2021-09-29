 import React from 'react'
 

 
 
 export const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className="errorvalidation">{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
  )

export  const renderTextArea = ({input, meta: { touched, error, warning }}) => (
      <div>
          <textarea {...input} placeholder="Content" className="add_para" />
          {touched && ((error && <span className="errorvalidation">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
);