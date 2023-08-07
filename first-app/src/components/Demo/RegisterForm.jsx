import { useFormik } from "formik";

const RegisterForm = () => {
  const { values, handleChange, handleSubmit, errors, handleBlur } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cnfPassword: "",
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

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "Email should be in proper format";
      }
      if (values.password.length < 6) {
        errors.password = "Password should be 6 characters long";
      }
      if (values.password !== values.cnfPassword) {
        errors.cnfPassword = "Confirm password does NOT match";
      }
      return errors;
    },
  });

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        {/* firstName */}
        <label htmlFor="firstname">First Name :</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ backgroundColor: errors.firstName ? "red" : "transparent" }}
        />
        <br />

        {errors.firstName && <p>{errors.firstName}</p>}
        <br />
        {/* lastName */}
        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.lastName && <p>{errors.lastName}</p>}
        <br />
        {/* Email */}
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.email && <p>{errors.email}</p>}
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegisterForm;
