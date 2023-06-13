import { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const isButtonDisabled = !email || !password;
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && /^\d+$/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValidEmail(false);
      alert("Invalid email.");
    } else if (!validatePassword(password)) {
      setIsValidPassword(false);
      alert("password is only number type and over 8 digits.");
    } else {
      alert("✅ login success!");
    }
  };
  return (
    <div className="login">
      <div className="content-wrap">
        <form onSubmit={handleSubmit}>
          <h1>westagram</h1>
          <div className="input-box">
            <input
              onChange={handleEmail}
              type="text"
              value={email}
              placeholder=" 전화번호, 사용자 이름 또는 이메일"
              className={!isValidEmail ? "invalid" : ""}
            />
          </div>
          <input
            onChange={handlePassword}
            type="password"
            value={password}
            placeholder=" 비밀번호"
            className={!isValidPassword ? "invalid" : ""}
          />
          <Link to="/Main">
            <button
              type="submit"
              className="login-btn"
              disabled={isButtonDisabled}
              style={{
                backgroundColor: isButtonDisabled
                  ? "grey"
                  : "rgb(45, 139, 240)",
              }}
              onClick={() => {
                navigate("/Main");
              }}
            >
              로그인
            </button>
          </Link>
        </form>

        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
