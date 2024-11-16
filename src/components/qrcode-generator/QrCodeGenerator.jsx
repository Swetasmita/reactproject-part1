import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./qrcode.css";

const QrCodeGenerator = () => {
    //state to get text value
    //state to get qrcode 
  const [inputValue, setInputValue] = useState("");
  const [qrcode, setQrCode] = useState("");
  
const handleGenerateQrCode = () =>{
    if(!inputValue.trim()){
        alert("Please enter value for QR Code!");
    }
    setQrCode(inputValue);
    setInputValue(""); //reset the input field
}
  return (
    <div className="qrcode-container">
      <h1>ReactJS QR Code Generator</h1>
      <div className="qrcode-wrapper">
        <input
          type="text"
          name="qr-code"
          value = {inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value for QR Code"
        />
        <button onClick={handleGenerateQrCode}>Generator QR Code</button>
      </div>
      <div>
        {
        <QRCode id="qr-code" value={qrcode} size={300}/>
        }
       
      </div>
    </div>
  );
};

export default QrCodeGenerator;
