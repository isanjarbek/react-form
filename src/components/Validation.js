import React from "react";
import { useInput } from "./useInput";

const Validation = () => {
  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 5, maxLength: 8 });

  return (
    <div className="form">
      <form>
        <h1>Registration</h1>
        {email.isDirty && email.isEmpty && (
          <div style={{ color: "red" }}>Error is empty</div>
        )}
        {email.isDirty && email.minLengthError && (
          <div style={{ color: "red" }}>Incorrect</div>
        )}
        {email.isDirty && email.isEmail && (
          <div style={{ color: "red" }}>Incorrect</div>
        )}
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
        />
        {password.isDirty && password.isEmpty && (
          <div style={{ color: "red" }}>Error is empty</div>
        )}
        {password.isDirty && password.minLengthError && (
          <div style={{ color: "red" }}>Incorrect</div>
        )}
        {password.isDirty && password.maxLengthError && (
          <div style={{ color: "red" }}>Incorrect</div>
        )}
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
        />

        <button
          type="submit"
          disabled={!email.inputValid || !password.inputValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Validation;
