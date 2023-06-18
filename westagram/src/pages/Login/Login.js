import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [isValidID, setIsValidID] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const isButtonDisabled = !ID || !password;
  const navigate = useNavigate();

  const saveUserId = (e) => {
    setID(e.target.value);
  };

  const savePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateID = (ID) => {
    const IDRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
    return IDRegex.test(ID);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && /^\d+$/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateID(ID)) {
      setIsValidID(false);
      alert("이메일 형식을 지켜주세요");
    } else if (!validatePassword(password)) {
      setIsValidPassword(false);
      alert("비밀번호는 여덟자리 숫자로 입력해주세요");
    } else {
      alert("✅ 로그인에 성공하셨습니다.");
    }
  };
  return (
    <div className="loginSujeong">
      <div className="content-wrap">
        <form onSubmit={handleSubmit}>
          <h1>westagram</h1>
          <div className="input-box">
            <input
              onChange={saveUserId} //svaeUserId함수실행
              type="text"
              value={ID}
              placeholder=" 전화번호, 사용자 이름 또는 이메일"
              className={!isValidID ? "invalid" : ""}
            />
          </div>
          <input
            onChange={savePassword}
            type="password"
            value={password}
            placeholder=" 비밀번호"
            className={!isValidPassword ? "invalid" : ""}
          />
          {/* <Link to="/MainSujeong"> */}
          <button
            type="submit"
            className="login-btn"
            disabled={isButtonDisabled}
            style={{
              backgroundColor: isButtonDisabled ? "grey" : "rgb(45, 139, 240)",
            }}
            onClick={() => {
              navigate("/MainSujeong");
            }}
          >
            로그인
          </button>
          {/* </Link> */}
        </form>

        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
