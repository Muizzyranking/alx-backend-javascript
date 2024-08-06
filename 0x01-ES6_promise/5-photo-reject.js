export default function uploadPhoto(filename) {
  const ret = Promise.reject(new Error(`${filename} cannot be processed`));
  return ret;
}
