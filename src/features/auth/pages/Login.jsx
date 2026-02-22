import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useAuth from "../hooks/useAuth";
import "../styles/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Forgot password states
  const [forgotModal, setForgotModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
    navigate("/");
  };

  const handleReset = (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match");
      return;
    }

    alert("Password reset successfully!");

    // Reset fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");

    // Close modal
    setForgotModal(false);
  };

  return (
    <div className="auth-container">

      {/* Floating Bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>

      <div className="auth-wrapper">

       {/* LEFT HEADING CARD */}
<div className="auth-heading-card">
  <h1 className="auth-heading-title">NEUROBLOOM</h1>
  
  <div className="auth-subheadline-title">Take a deep breath.</div>
  <p className="auth-heading-subtitle">
    Welcome back to your safe space for mental clarity and peace.
  </p>

  <div className="auth-subheadline-title mt-4">Your mind matters.</div>
  <p className="auth-heading-subtitle">
    Reconnect with yourself. We’re here to help you navigate your journey.
  </p>
</div>

        {/* LOGIN CARD */}
        <div className="auth-card">
          <h2 className="card-title">
            Log in to continue your journey
          </h2>

          <form onSubmit={handleLogin} className="auth-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            <div className="forgot-password-container">
              <button
                type="button"
                className="forgot-password-btn"
                onClick={() => setForgotModal(true)}
              >
                Forgot your password?
              </button>
            </div>

            <button type="submit">Login</button>
          </form>

          <p className="auth-switch">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>

      {/* FORGOT PASSWORD MODAL */}
      {forgotModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h2 className="modal-title">Reset Your Password</h2>

            <form onSubmit={handleReset} className="auth-form">

              <div className="password-wrapper">
                <input
                  type={showCurrent ? "text" : "password"}
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowCurrent(!showCurrent)}
                >
                  {showCurrent ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>

              <div className="password-wrapper">
                <input
                  type={showNew ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowNew(!showNew)}
                >
                  {showNew ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>

              <div className="password-wrapper">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  required
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>

              <button type="submit">Confirm</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;