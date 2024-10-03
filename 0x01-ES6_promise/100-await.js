import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const Photo = await uploadPhoto();
    const User = await createUser();
    return {
      Photo,
      User,
    };
  } catch (e) {
    return {
    };
  }
}
