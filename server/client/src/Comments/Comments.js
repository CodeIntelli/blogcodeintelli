import { Box, Button, TextareaAutosize } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { newComment, getComment } from "../services/api";
import CommentDetails from "./CommentDetails";

const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 100,
    display: "flex",
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: "50%",
    marginRight: 20,
  },
  textarea: {
    width: "100%",
    margin: 0,
    marginBottom: 20,
  },
  button: {
    height: 40,
    marginLeft: 20,
  },
}));

const initialValue = {
  name: "",
  postId: "",
  date: new Date(),
  comments: "",
};
const Comments = ({ post }) => {
  const classes = useStyles();
  const [comments, setComments] = React.useState(initialValue);
  const [readComment, setReadComment] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  // console.log("testing", setReadComment);

  React.useEffect(() => {
    const getData = async () => {
      // console.log("post id ", post._id);
      let response = await getComment(post._id);
      // console.log("response data", response.data);
      setReadComment(response.data);
    };
    getData();
  }, [post, toggle]);
  const handleChange = (e) => {
    setComments({
      ...comments,
      name: post.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  const postComment = async () => {
    let respond = await newComment(comments);
    setToggle((prev) => !prev);
    // console.log("after data sent");
    return console.log("Comment Inserted");
  };
  const url = "https://image.flaticon.com/icons/png/512/709/709722.png";
  return (
    <>
      <Box>
        <Box className={classes.component}>
          <img src={url} alt="avtar" className={classes.image} />
          <TextareaAutosize
            minRows={4}
            className={classes.textarea}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            onClick={() => postComment()}
          >
            Post
          </Button>
        </Box>
        {readComment &&
          readComment.map((comment, index) => (
            <CommentDetails
              comment={comment}
              index={index}
              setToggle={setToggle}
            />
          ))}
      </Box>
    </>
  );
};

export default Comments;
