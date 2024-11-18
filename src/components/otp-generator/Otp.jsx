import React, { useEffect, useRef, useState } from "react";
import "./otp.css";

const Otp = ({ otpLength = 4 }) => {
  //state to get otp length filled with initial value empty string
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  //console.log(otpFields);
  const refs = useRef([]); //Dom reference
  //console.log(refs);

  const handleKeyDown = (event, index) => {
    const key = event.key;
    console.log(key);
    if (key === "ArrowLeft") {
      if (index > 0) refs.current[index - 1].focus();
      return;
    }
    if (key === "ArrowRight") {
      if (index + 1 < otpFields.length) refs.current[index + 1].focus();
      return;
    }
    // Update the state with the new otp value
    const copyOtpFields = [...otpFields];
    copyOtpFields[index] = key;

    if (key === "Backspace") {
      //console.log("Delete clicked");
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
      if (index > 0) refs.current[index - 1].focus();
      return;
    }
    if (isNaN(key)) {
      return;
    }
    // 3 < 4 , then focus field
    if (index + 1 < otpFields.length) refs.current[index + 1].focus();
    setOtpFields(copyOtpFields);
  };
  const handleChange = (event, index) => {
    const value = event.target.value;
    // Update the state with the new otp value
    const copyOtpFields = [...otpFields];
    copyOtpFields[index] = value;
    setOtpFields(copyOtpFields);
  };
  useEffect(() => {
    refs.current["0"].focus();
  }, []); //when component first time rendering
  return (
    <div className="otp-container">
      <h2>OTP</h2>
      <div className="otp-generator">
        {otpFields.map((value, index) => {
          return (
            <input
              type="text"
              key={index}
              value={value}
              maxLength="1"
              onChange={(event) => handleChange(event, index)}
              ref={(currentInput) => (refs.current[index] = currentInput)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Otp;
