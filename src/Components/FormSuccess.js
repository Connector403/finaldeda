// show success logo after form submission
import "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import React from "react";
import { NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";

const FormSuccess = () => {
  return (
    <div className="details">
        <h3>Thank you for signing up.</h3>
        <div >First Name: {this}</div>
    </div>
  );
};

export default FormSuccess;
