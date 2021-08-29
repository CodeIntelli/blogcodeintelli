import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";
import { DB_URL } from "../config/";

const storage = new GridFsStorage({
  url: DB_URL,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];
    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      fileName: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});
// console.log(storage);

export default multer({ storage });
