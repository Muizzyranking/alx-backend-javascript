import { createUser, uploadPhoto } from './utils';

export default function asyncUploadUser() {
  const ret = createUser()
    .then((user) => uploadPhoto()
      .then((photo) => ({ photo, user })));
  return ret;
}
