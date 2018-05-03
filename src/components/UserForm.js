import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";
import { withFormik } from "formik";
// import { Redirect } from "react-router-dom";
import axios from "axios";
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
  isSubmitting,
  status
}) =>
  status && status.userCreated === true ? (
    <div>User succesfully created!</div>
  ) : (
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
      {errors.userCreated && <Error>{errors.userCreated}</Error>}
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
  handleSubmit: async (
    values,
    { props, setSubmitting, setStatus, setErrors }
  ) => {
    // Pass all values except confirm Password
    const { confirmPassword, ...formValues } = { ...values };
    try {
      const response = await axios.post("/create-user", formValues);
      if (response.status === 201) {
        setSubmitting(false);
        setStatus({ userCreated: true });
      } else {
        setErrors({
          userCreated:
            "Error creating user! Please try different email/password"
        });
      }
    } catch (e) {
      setErrors({
        userCreated:
          "Error creating user! Please try different email/password"
      });
      console.error(e);
    }
  }
})(InnerForm);

export default UserForm;
