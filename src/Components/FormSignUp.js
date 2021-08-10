import React from "react";
import UseForm from "./UseForm";
import validate from "./ValidateInfo";

const FormSignUp = ({ submitForm }) => {
  // structure the values from the use form
  const { handleChange, values, handleSubmit, errors } = UseForm(
    submitForm,
    validate
  );

  return (
    <div className="main">
        <div className="row">
<div className="col align-self-center">
      <h3 className="text-center">Sign Up</h3>

</div>
        </div>
      <div className="container">
        <form className="form-group mx-auto" onSubmit={handleSubmit}>
          <label htmlFor="username" className="input-label">
            Username*
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter Your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <div className="errorMsg">{errors.username}</div>}

          <label htmlFor="email" className="form-label">
            Email*
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Your email"
            value={values.email}
            onChange={handleChange}
          />
           {errors.email && <div className="errorMsg">{errors.email}</div>}
          <label htmlFor="password" className="form-label">
            Password*
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Your password"
            value={values.password}
            onChange={handleChange}
          />
           {errors.password && <div className="errorMsg">{errors.password}</div>}

          <label htmlFor="confirmPassword" className="form-label">
               Confirm password*
             </label>
             <input
               id="confirmPassword"
               type="password"
               name="confirmPassword"
               className="form-control"
               placeholder="Enter Your confirm-password"
               value={values.confirmPassword}
               onChange={handleChange}
             />
                {errors.confirmPassword && <div className="errorMsg">{errors.confirmPassword}</div>}

              <button type="submit" className="form-input-btn btn btn-lg btn-primary mt-2 ms-1">Sign Up</button>
        </form>
      </div>
    </div>
  );
  //   return (
  //     <div className="form-content-right">
  //       <form className="form-group" onSubmit={handleSubmit}>
  //
  //         <div className="form-inputs">
  //           <label htmlFor="username" className="form-label ">
  //             Username
  //           </label>
  //           <input
  //             id="username"
  //             type="text"
  //             name="username"
  //             className="form-control"
  //             placeholder="Enter Your username"
  //             value={values.username}
  //             onChange={handleChange}
  //           />
  //           {errors.username && <p>{errors.username}</p>}
  //         </div>
  //         <div className="form-inputs">
  //           <label htmlFor="email" className="form-label">
  //             Email
  //           </label>
  //           <input
  //             id="email"
  //             type="email"
  //             name="email"
  //             className="form-control"
  //             placeholder="Enter Your email"
  //             value={values.email}
  //             onChange={handleChange}
  //           />
  //            {errors.email && <p>{errors.email}</p>}
  //         </div>
  //         <div className="form-inputs">
  //           <label htmlFor="password" className="form-label">
  //             Password
  //           </label>
  //           <input
  //             id="password"
  //             type="password"
  //             name="password"
  //             className="form-control"
  //             placeholder="Enter Your password"
  //             value={values.password}
  //             onChange={handleChange}
  //           />
  //            {errors.password && <p>{errors.password}</p>}
  //         </div>
  //         <div className="form-inputs">
  //           <label htmlFor="confirmPassword" className="form-label">
  //             Confirm password
  //           </label>
  //           <input
  //             id="confirmPassword"
  //             type="password"
  //             name="confirmPassword"
  //             className="form-control"
  //             placeholder="Enter Your confirm-password"
  //             value={values.confirmPassword}
  //             onChange={handleChange}
  //           />
  //            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
  //         </div>
  //         <br />
  //         <button type="submit" className="form-input-btn btn btn-primary">Sign Up</button>
  //         <span className="form-input-login">Already have an account? <a href="#">here</a></span>
  //       </form>
  //     </div>
  //   );
};

export default FormSignUp;
