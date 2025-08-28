import { useState } from "react";
import {
  validateRequired,
  validateEmail,
  validateForm,
} from "../utils/validation.js";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    nameError ? setNameError("") : null;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    emailError ? setEmailError("") : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ใช้ function ที่ import มา
    !validateRequired(name) && setNameError("โปรดใส่ชื่อของคุณ");
    !validateRequired(email) && setEmailError("โปรดใส่อีเมลของคุณ");

    if (!validateRequired(name) || !validateRequired(email)) return;

    !validateEmail(email) && setEmailError("รูปแบบอีเมลไม่ถูกต้อง");

    // ถ้าผ่านการตรวจสอบทั้งหมด
    if (
      validateRequired(name) &&
      validateRequired(email) &&
      validateEmail(email)
    ) {
      console.log("Form is valid:", { name, email });
      // ทำการ submit
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <input
        className="mr-1"
        type="text"
        name="name"
        placeholder="ชื่อ"
        value={name}
        onChange={handleNameChange}
      />
      <input
        className="mr-1"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
