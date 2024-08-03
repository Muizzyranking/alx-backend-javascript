export default function signUpUser(firstName, lastName) {
  const ret = new Promise((resolve) => {
    resolve({
      firstName,
      lastName,
    });
  });
  return ret;
}
