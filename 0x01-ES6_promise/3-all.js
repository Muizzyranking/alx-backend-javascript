import { createUser, uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  const ret = Promise.all([createUser(), uploadPhoto()])
    .then((values) => {
      const [user, photo] = values;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
  return ret;
}
