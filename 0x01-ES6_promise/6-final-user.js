import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);
  const results = Promise.allSettled([signUpPromise, uploadPhotoPromise]);

  return results.then((results) => results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : `${result.reason}`,
  })));
}
