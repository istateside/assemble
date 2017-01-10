
/**
  A function used primarily on signup to validate email addresses. Planning to
  implement validation by sending an email later, so we don't need anything
  too fancy right now. Just checking to see that it has `@` and `.`.

  @function isValidEmail
  @param {String} email The email address entered by user on signup
  @return Boolean
 */
export function isValidEmail(email) {
  return email.contains("@", ".");
}
