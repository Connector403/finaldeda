// Custom hooks for the form
import React from "react";
import { useState, useEffect } from "react";

const UseForm = (callback, validate) => {
  // using useState with the Errors
  const [errors, setErrors] = useState({});

  // submitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  // set up values i.e username, email, password and confirm password
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // if errors display else show success page
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]); // only trigger if there is an error

  // prevent the values from going away on refresh
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // Upon Value  change, it should update the values
  // targetting the name attribute of each input i.e name of:
  // from username input field and so on...
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      // [e.target.name]: e.target.value
      [name]: value,
    });
  };

  return { handleChange, values, handleSubmit, errors };
};

export default UseForm;
