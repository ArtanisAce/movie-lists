import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { withFormik } from 'formik';
import { movieGenres } from '../constants';

const CreateUserForm = styled.form`
  display: flex;
  width: 30%;
  flex-direction: column;
  input, button, select {
    font-family: 'Sanchez', Arial, serif;
  }
`;

const FormInput = styled.input`
  padding: 0.6em;
`;

const Error = styled.div`
  color: red;
`;

const GenreDropdown = styled.select`
  padding: 0.3em;
`;

const Genre = styled.option`
  text-transform: capitalize;
`;

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
    <CreateUserForm onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <FormInput
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {touched.email && errors.email && <Error>{errors.email}</Error>}
      <label htmlFor="password">Password</label>
      <FormInput
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {touched.password && errors.password && <Error>{errors.password}</Error>}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
      {/* <label htmlFor="genre">Choose your favourite genre</label> */}
      <GenreDropdown
        name="genre"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.genre}>
        <option value="default" disabled>Choose your favourite genre...</option>
        {movieGenres.map(
          (genre, index) => (
            <Genre key={index} value={genre}>{genre}</Genre>
          )
        )}
        {/* 
        <option value="western">Western</option>
        <option value="drama">Drama</option>
        <option value="horror">Horror</option>
        <option value="fantasy">Fantasy</option>
        <option value="science-fiction">Science-Fiction</option>
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="war">War</option> */}
      </GenreDropdown>
      {touched.genre && errors.genre && <Error>{errors.genre}</Error>}
    </CreateUserForm>
  );

const UserForm = withFormik({
  mapPropsToValues: props => ({ email: '', password: '', genre: 'default' }),
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (values.genre === 'default') {
      errors.genre = 'You need to choose a genre!';
    }
    return errors;
  },
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
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
  },
})(InnerForm);

export default UserForm;