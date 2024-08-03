export default function signUpUser(firstName, lastName) {
  const ret = new Promise((resolve, reject) => {
    resolve({
      firstName,
      lastName,
    });
  });
  return ret;
}
