export default ({ password, confirmPassword }) => {
  return password.trim() === confirmPassword.trim()
}
