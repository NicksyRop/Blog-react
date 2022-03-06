import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username...."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email...."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password...."
        />
        <button className="registerBtn">
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
      </form>

      <button className="loginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
}
