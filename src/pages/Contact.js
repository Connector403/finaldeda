import React, { useState } from "react";
import FormSignUp from "../Components/FormSignUp";
import FormSuccess from "../Components/FormSuccess";
import "../Components/Form.css";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
    
      <div className="form-container">
      {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
    
     
       
      </div>
    </>
  );
};

export default Form;
