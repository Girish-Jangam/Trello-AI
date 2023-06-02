import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "6474f8d51870e4825e0a",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
