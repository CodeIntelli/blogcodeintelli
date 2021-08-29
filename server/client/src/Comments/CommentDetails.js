import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { deleteComment } from "../services/api";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 30,
    background: "#F5F5F5",
    padding: 10,
  },
  container: {
    display: "flex",
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
    marginRight: 20,
  },
  date: {
    fontSize: 14,
    color: "#878787",
  },
  delete: {
    marginLeft: "auto",
  },
}));
const CommentDetails = ({ comment, setToggle, index }) => {
  // const history = useHistory();
  // console.log(comment);
  const removeComment = async (id) => {
    await deleteComment(id);
    setToggle((prev) => !prev);
    return console.log("delete successfully");
    // return history.go(0);
  };
  const classes = useStyles();
  return (
    <>
      <Box className={classes.component} key={index}>
        <Box className={classes.container}>
          <Typography className={classes.name}>{comment.name}</Typography>
          <Typography>{new Date(comment.date).toDateString()}</Typography>
          <Delete
            onClick={() => removeComment(comment._id)}
            className={classes.delete}
          />
        </Box>
        <Typography>{comment.comments}</Typography>
      </Box>
    </>
  );
};

export default CommentDetails;
