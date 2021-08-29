import Grid from "gridfs-stream";
import mongoose from "mongoose";
const url = "http://localhost:9000";
let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});
const uploadImageController = {
  async uploadImage(req, res) {
    try {
      if (!req.file) {
        return res.status(404).json({ msg: "file not found" });
      }
      const imageUrl = `${url}/file/${req.file.filename}`;
      res.status(200).send(imageUrl);
    } catch (err) {
      res.status(505).json({ msg: "server error" + err.message });
    }
  },

  async getImage(req, res) {
    try {
      const file = await gfs.files.findOne({ filename: req.params.filename });
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } catch (err) {
      res.json({ err });
    }
  },
};
export default uploadImageController;
