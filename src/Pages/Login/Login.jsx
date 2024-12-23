import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validation
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setFormData({
        email: "",
        password: "",
      });

      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 1000,
      });

      setTimeout(() => {
        navigate("/sidebar/customerlist");
      }, 1100);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form
          className="container w-25 p-4 shadow rounded"
          onSubmit={handleSubmit}
        >
          <div>
            <h3 className="loginHead">
              {state === "Sign Up" ? "Create Account" : "Login"}
            </h3>
            <p className="loginPara">
              Please {state === "Sign Up" ? "sign up" : "log in"} for the Bill
              Management.
            </p>
          </div>

          {state === "Sign Up" && (
            <div className="mb-2">
              <label className="form-label">Full Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="fullname"
              />
            </div>
          )}

          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            {errors.email && <span className="errorMsg">{errors.email}</span>}
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              onChange={handleChange}
              name="password"
              value={formData.password}
            />
            {errors.password && (
              <span className="errorMsg">{errors.password}</span>
            )}
          </div>

          <button className="loginBtn w-100 mt-2" type="submit">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>

          {state === "Sign Up" ? (
            <p className="mt-3 textColor">
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="select text-decoration-underline cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="mt-3 textColor">
              Create a new account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="select text-decoration-underline cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                Click here
              </span>
            </p>
          )}
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
