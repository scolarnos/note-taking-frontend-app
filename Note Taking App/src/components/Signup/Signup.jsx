import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import s from "./signup.module.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://note-taking-backend-wkmm.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      localStorage.setItem("userId", result.userId);
      alert("Signup successful!");
      navigate("/login");
    } else {
      alert(`Error: ${result.message}`);
    }
  };

  return (
    <div className={s.signupPageContainer}>
      <div className={s.signupFormBox}>
        <form className={s.signupForm} onSubmit={handleSubmit}>
          <span className={s.title}>Sign up</span>
          <span className={s.subtitle}>Create a free account with your email.</span>
          <div className={s.signupFormContainer}>
            <input
              type="text"
              name="name"
              className={s.signupInput}
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className={s.signupInput}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              className={s.signupInput}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={s.signupFormButton}>Sign up</button>
        </form>
        <div className={s.signupFormSection}>
          <p>
            Have an account? <Link to="/login" state={{ manualLogin: true }}>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;