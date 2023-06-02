import { storage } from "@/appwrite";

const getUrl = async (image: Image) => {
  const url = storage.getFilePreview(image.bucketID, image.fileID);

  return url;
};

export default getUrl;
