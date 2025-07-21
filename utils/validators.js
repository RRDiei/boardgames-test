export function validateUsername(username) {
  const validationRegex = /^(?=.*[A-Za-z])[A-Za-z0-9].{4,20}$/;
  return validationRegex.test(username);
}

export function validatePassword(password) {
  const validationRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  return validationRegex.test(password);
}
