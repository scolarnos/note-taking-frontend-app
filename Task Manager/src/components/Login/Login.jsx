import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import a from "./login.module.css";

const Login = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isVerifying, setIsVerifying] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const manualLogin = location.state?.manualLogin || false;

    if (!userId || manualLogin) {
      console.log("🔹 No userId found or manual login requested, showing login form.");
      setIsVerifying(false);
      return;
    }

    fetch("https://note-taking-backend-wkmm.onrender.com/api/auth/verify", {
      method: "GET",
      headers: {
        "User-ID": userId,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("🔹 Token Verification Response:", data);
        if (data.valid) {
          console.log("✅ Token is valid, redirecting to dashboard...");
          navigate("/dashboard", { replace: true });
          if (onLoginSuccess) onLoginSuccess();
        } else {
          console.log("❌ Invalid token, clearing...");
          localStorage.removeItem("userId");
        }
      })
      .catch((error) => console.error("🔴 Error verifying token:", error))
      .finally(() => setIsVerifying(false));
  }, [location]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🔹 Sending login request with data:", formData);

    try {
      const response = await fetch("https://note-taking-backend-wkmm.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("🔹 Server Response:", result);

      if (response.ok) {
        localStorage.setItem("userId", result.userId);
        setIsLoggedIn(true);
        console.log("✅ Login successful, redirecting to dashboard...");
        navigate("/dashboard", { replace: true });
        if (onLoginSuccess) onLoginSuccess();
      } else {
        alert(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      console.error("🔴 Login failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  if (isVerifying) {
    return <div className={a.background}>Verifying token...</div>;
  }

  if (isLoggedIn) {
    return <div className={a.background}>Redirecting to dashboard...</div>;
  }

  return (
    <div className={a.background}>
      <div className={a.loginPageContainer}>
        <div className={a.loginFormBox}>
          <form className={a.loginForm} onSubmit={handleSubmit}>
            <span className={a.title}>Login</span>
            <span className={a.subtitle}>Enter your credentials to access your notes.</span>
            <div className={a.loginFormContainer}>
              <input
                type="email"
                name="email"
                className={a.loginInput}
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                className={a.loginInput}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={a.loginFormButton}>Login</button>
          </form>
          <div className={a.loginFormSection}>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className={a.link}>Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;