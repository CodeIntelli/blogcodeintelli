import CommentModel from "../model/Comment";
const commentController = {
  async newComment(req, res) {
    // console.log("1");
    try {
      // console.log("2");
      const Comment = await new CommentModel(req.body);
      // console.log("3");
      Comment.save();
      return res.json(success);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async getComment(req, res) {
    try {
      // console.log("1");
      // console.log(req.params.id);
      const CommentData = await CommentModel.find({
        postId: req.params.id,
      }).sort({ date: -1 });
      // console.log(CommentData);
      res.status(200).send({ data: CommentData });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteComment(req, res) {
    try {
      let data = await CommentModel.findByIdAndDelete(req.params.id);
      res.status(200).send("comment delete successfully");
      // console.log("deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
export default commentController;
