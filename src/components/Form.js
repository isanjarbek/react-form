import React, { useEffect, useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("email error");
  const [passwordError, setPasswordError] = useState("password error");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value < 3 || e.target.value > 8) {
      setPasswordDirty("Password should be between 3 and 8");
      if (!e.target.value) {
        setPasswordError("Enter the password correctly!");
      } else {
        setPasswordError("");
      }
    }
  };
  return (
    <div className="form">
      <form>
        <h1>Registration</h1>
        <input
          name="email"
          type="text"
          value={email}
          onBlur={(e) => blurHandler(e)}
          placeholder="Enter your email"
          onChange={(e) => emailHandler(e)}
        />
        {emailDirty && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <input
          name="password"
          type="password"
          value={password}
          onBlur={(e) => blurHandler(e)}
          placeholder="Enter your password"
          onChange={(e) => passwordHandler(e)}
        />
        {passwordDirty && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        <button type="submit" disabled={!formValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
