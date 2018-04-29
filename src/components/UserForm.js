import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";
import { withFormik } from "formik";
import { movieGenres } from "../constants";
import { SubmitButton } from "../styles";

const CreateUserForm = styled.form`
  display: flex;
  width: 75%;
  margin: 24px auto;
  flex-direction: column;
  align-items: center;
  input,
  button,
  select,
  option {
    font-family: "Sanchez", Arial, serif;
  }
`;

const InputLabel = styled.label`
  margin-bottom: 12px;
`;

const FormInput = styled.input`
  margin-bottom: ${props => props.theme.lowMargin};
  padding: 0.6em;
  width: 65%;
`;

const Error = styled.div`
  color: red;
  margin-bottom: ${props => props.theme.lowMargin};
`;

const GenreDropdown = styled.select`
  text-transform: capitalize;
  padding: 0.3em;
  margin-bottom: ${props => props.theme.lowMargin};
`;

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <CreateUserForm onSubmit={handleSubmit}>
    <InputLabel htmlFor="email">Email</InputLabel>
    <FormInput
      type="email"
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
    />
    {touched.email && errors.email && <Error>{errors.email}</Error>}
    <InputLabel htmlFor="password">Password</InputLabel>
    <FormInput
      type="password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
    />
    {touched.password && errors.password && <Error>{errors.password}</Error>}
    <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
    <FormInput
      type="password"
      name="confirmPassword"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.confirmPassword}
    />
    {touched.confirmPassword &&
      errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
    <GenreDropdown
      name="genre"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.genre}
    >
      <option value="default" disabled>
        Choose your favourite genre...
      </option>
      {movieGenres.map((genre, index) => (
        <option key={index} value={genre}>
          {genre}
        </option>
      ))}
    </GenreDropdown>
    {touched.genre && errors.genre && <Error>{errors.genre}</Error>}
    <SubmitButton type="submit" disabled={isSubmitting}>
      Submit
    </SubmitButton>
  </CreateUserForm>
);

const UserForm = withFormik({
  mapPropsToValues: props => ({ email: "", password: "", genre: "default" }),
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (values.genre === "default") {
      errors.genre = "You need to choose a genre!";
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords must coincide!";
    }
    return errors;
  },
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */
    }
  ) => {
    
    // LoginToMyApp(values).then(
    //   user => {
    //     setSubmitting(false);
    //     // do whatevs...
    //     // props.updateUser(user)
    //   },
    //   errors => {
    //     setSubmitting(false);
    //     // Maybe even transform your API's errors into the same shape as Formik's!
    //     setErrors(transformMyApiErrors(errors));
    //   }
    // );
  }
})(InnerForm);

export default UserForm;
