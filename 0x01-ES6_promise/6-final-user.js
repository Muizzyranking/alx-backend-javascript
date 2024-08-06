import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);
  const results = Promise.allSettled([signUpPromise, uploadPhotoPromise]);

  return results.then((results) => {
    const result = [];
    results.forEach((item) => {
      if (item.status === 'fulfilled') {
        result.push({ status: item.status, value: item.value });
      } else {
        result.push({ status: item.status, value: `${item.reason}` });
      }
    });
    return result;
  });
}
