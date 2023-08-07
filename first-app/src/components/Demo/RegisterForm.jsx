import { useFormik } from "formik";

const RegisterForm = () => {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log("VALUES : ", values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.firstName) {
        errors.firstName = "First name is required";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Too many characters";
      }
      if (!values.lastName) {
        errors.lastName = "Last name is required";
      } else if (values.lastName.length > 15) {
        errors.lastName = "Too many characters";
      }
      return errors;
    },
  });

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name :</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
        <br />

        {errors.firstName && <p>{errors.firstName}</p>}
        <br />

        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        <br />
        {errors.lastName && <p>{errors.lastName}</p>}
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegisterForm;
