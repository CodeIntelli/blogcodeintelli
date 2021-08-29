import post from "../model";

const postController = {
  testing(req, res) {
    res.send("connected from router postcontroller");
  },
  async createPost(req, res) {
    try {
      const data = await new post(req.body);
      data.save();
      // console.log("success");
    } catch (err) {
      res.json({ error: err });
    }
  },
  // async readPost(req, res) {
  //   try {
  //     let posts;
  //     if (req.params.id === undefined) {
  //       posts = await post.find();
  //     } else {
  //       posts = await post.findById(req.params.id);
  //     }
  //     // console.log(posts);
  //     res.status(200).json(posts);
  //   } catch (err) {
  //     console.log("error", err);
  //   }
  // },

  async readPost(req, res) {
    try {
      let posts;
      if (req.params.id) {
        // console.log("req vala id");
        posts = await post.findById(req.params.id);
      } else {
        // console.log("else req vala id");
        let username = req.query.username;
        let category = req.query.category;
        if (username) {
          // console.log("callusername");
          posts = await post.find({ username: username });
          // console.log(posts);
        } else if (category) {
          // console.log("call category");
          posts = await post.find({ categories: category });
          // console.log(posts);
        } else {
          posts = await post.find();
        }
      }
      // console.log(posts);
      res.status(200).json(posts);
    } catch (err) {
      console.log("error", err);
    }
  },

  async updatePost(req, res) {
    try {
      let data = await post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      // console.log("final data that will be saved in database", data);
      res.status(200).send("blog updated successfully");
    } catch (err) {
      console.log("error", err);
    }
  },
  async deletePost(req, res) {
    try {
      // console.log("delete receive");
      let data = await post.findByIdAndDelete(req.params.id);
      res.status(200).send("blog delete successfully");
      console.log("deleted");
    } catch (err) {
      console.log("error", err);
    }
  },
};
export default postController;
