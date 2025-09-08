export function validateRequired(value) {
  return value && value.trim() !== "";
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateForm(name, favoriteMovie, email, setNameError, setFavoriteMovieError, setEmailError) {
  let isValid = true;
  
  if (!name) {
    setNameError("กรุณาใส่ชื่อ");
    isValid = false;
  } else {
    setNameError("");
  }
  
  if (!favoriteMovie) {
    setFavoriteMovieError("กรุณาเลือกหนัง");
    isValid = false;
  } else {
    setFavoriteMovieError("");
  }
  
  if (!email) {
    setEmailError("กรุณาใส่อีเมล");
    isValid = false;
  } else if (!validateEmail(email)) {
    setEmailError("รูปแบบอีเมลไม่ถูกต้อง");
    isValid = false;
  } else {
    setEmailError("");
  }
  
  return isValid;
}