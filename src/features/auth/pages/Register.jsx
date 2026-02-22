import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useAuth from "../hooks/useAuth";
import "../styles/auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    register({ name, gender, email, password });
    navigate("/login");
  };

  return (
    <div className="auth-container">

      {/* Floating Bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>

      <div className="auth-wrapper">

        {/* LEFT REGISTRATION CARD */}
        <div className="auth-card">
          <h2 className="card-title">
            Unlock the blueprint of your mind. Discover the 'you' behind the noise.
          </h2>

          <form onSubmit={handleSubmit} className="auth-form">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="gender-select"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

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

            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            <button type="submit">Register</button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>

        {/* RIGHT FLOATING CARD */}
        <div className="auth-heading-card">
          <h1 className="auth-heading-title">NeuroBloom</h1>

          <h2 className="auth-subheadline-title">
            Your mind doesn't come with a manual. So we built one for you.
          </h2>
          <p className="auth-heading-subtitle">
            Generic advice doesn't work. NeuroBloom uses clinical-grade assessments and personalized brain games to map your unique path to mental clarity.
            <br />
            <strong>The "Why":</strong> It makes the user feel like the app is specifically for them, not just a one-size-fits-all solution.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;