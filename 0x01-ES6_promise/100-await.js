import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadPhotoResponse = await uploadPhoto();
    const createdUser = await createUser();
    return { uploadPhotoResponse, createdUser };
  } catch (e) {
    return { photo: null, user: null };
  }
}
