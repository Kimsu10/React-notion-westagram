import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSujeong.scss";

const LoginSujeong = () => {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [isValidID, setIsValidID] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const saveUserId = (e) => {
    const value = e.target.value;
    setID(value);
    setIsValidID(validateID(value));
    setIsButtonDisabled(
      !value || !password || !validateID(value) || !isValidPassword
    );
  };

  const savePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsValidPassword(validatePassword(value));
    setIsButtonDisabled(
      !ID || !value || !isValidID || !validatePassword(value)
    );
  };

  const validateID = (ID) => {
    const IDRegex = /@/;
    return IDRegex.test(ID);
  };

  const validatePassword = (password) => {
    return password.length >= 5;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidID) {
      alert("@ 포함 여부를 확인해주세요");
    } else if (!isValidPassword) {
      alert("비밀번호는 5자리 이상 입력해주세요");
    } else {
      alert("✅ 로그인에 성공하셨습니다.");
      navigate("/MainSujeong");
    }
  };

  // // fetch("".{method:"GET"})

  // fetch("/data/mock.js", "option 객체", {
  //   method: "get",
  // }) //fetch시 무한으로 돌기때문에 반드시 useEffect를 써야한다.
  //   .then((res) => {
  //     res.json(); //제이슨을 자바스크립트로 바꿔줌
  //   }) //비동기함수를 사용한다. then뒤에 ;붙이면 다음으로 안넘어가니까 조심하자.
  //   .then((res) => {
  //     console.log(res);
  //     return <div>{item.title}</div>;
  //    setData(res)
  //   });

  return (
    <div className="loginSujeong">
      <div className="content-wrap">
        <form onSubmit={handleSubmit}>
          <h1>westagram</h1>
          <div className="input-box">
            <input
              onChange={saveUserId}
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

          <button
            type="submit"
            className="login-btn"
            disabled={isButtonDisabled}
            style={{
              backgroundColor: isButtonDisabled ? "grey" : "rgb(45, 139, 240)",
            }}
          >
            로그인
          </button>
        </form>

        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default LoginSujeong;
