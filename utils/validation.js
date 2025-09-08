export function validateForm(name, favoriteMovie, email, setNameError, setFavoriteMovieError, setEmailError) {
    let isValid = true;
    // validate name
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name) {
      setNameError("please enter your name");
      isValid = false;
    } else {
      setNameError("");
    }
  
    if (!favoriteMovie) {
      setFavoriteMovieError("please select your favorite movie");
      isValid = false;
    } else {
      setFavoriteMovieError("");
    }
  
    if (!email) {
      setEmailError("please enter your email");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("your email is not valid");
      isValid = false;
    } else {
      setEmailError("");
    }
    return isValid;
  }