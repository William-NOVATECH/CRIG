export default class User {
  constructor(
    fullName,
    email,
    password,
    confirmPassword,
    roleName = "Pyme"
  ) {
    this.fullName = fullName;
    this.email = email;
    this.passwordHash = password;
    this.confirmPassword = confirmPassword;
    this.roleName = roleName;
  }
}
