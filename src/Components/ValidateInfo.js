import React from "react";

export default function ValidateInfo(values) {
  let errors = {};

  // Username
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  // email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //if value not right format
    errors.email = "Email address is invalid";
  }

  // password
  if (!values.password.trim()) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  // confirmPassword
  if (!values.confirmPassword.trim()) {
    errors.confirmPassword = "Password required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "passwords does not match";
  }

  return errors;
}
