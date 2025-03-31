export const checkValidation = (isSignInForm, name, email, password) => {
  if (!isSignInForm) {
    const resName = /^[A-Za-z\s]{3,50}$/.test(name);
    if (!resName) {
      return "Name is not correct";
    }
  }
  const resEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const resPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);

  if (!resEmail) {
    return "Email Id is not correct";
  }
  if (!resPassword) {
    return "Password is not correct";
  }
  return null;
};
