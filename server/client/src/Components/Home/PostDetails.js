import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    maxHeight: 300,
    margin: 20,
    borderRadius: 10,
    height: 300,
    border: "1px solid #d3cede",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.5s ease-in-out",
    overflow: "hidden",
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
    transition: "all 0.5s ease-in-out",
    borderRadius: "10px 10px 0 0",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 16,
    fontWeight: 600,
    // lower four property will be of overflow
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "200px",
    // height: "88px",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    fontFamily: "Roboto Mono",
    textAlign: "center",
  },
  details: {
    fontSize: "12px",
    color: "#000",
    margin: 2,
  },
});

const PostDetails = ({ posts }) => {
  const classes = useStyles();
  const addEllipses = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };
  const url = posts.image || "https://source.unsplash.com/user/erondu/1601x900";
  return (
    <>
      <Box className={classes.container} key={posts.i}>
        <img src={url} className={classes.image} alt="post-data" />
        <Typography className={classes.text}>{posts.categories}</Typography>
        <Typography className={classes.heading}>
          {addEllipses(posts.title, 40)}
        </Typography>
        <Typography className={classes.text}>{posts.username}</Typography>
        <Typography className={classes.details}>
          {addEllipses(posts.description, 100)}
        </Typography>
      </Box>
    </>
  );
};

export default PostDetails;
