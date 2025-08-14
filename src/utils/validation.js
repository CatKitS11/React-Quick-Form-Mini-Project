export const validateRequired = (value) => {
    return value.trim() !== "";
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validateForm = (formData) => {
    const errors = {};
  
    // ตรวจสอบชื่อ
    if (!validateRequired(formData.name)) {
      errors.name = "โปรดใส่ชื่อของคุณ";
    }
  
    // ตรวจสอบอีเมล
    if (!validateRequired(formData.email)) {
      errors.email = "โปรดใส่อีเมลของคุณ";
    } else if (!validateEmail(formData.email)) {
      errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }
  
    return errors;
  };