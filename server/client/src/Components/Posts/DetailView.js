import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { readPostById, deletePost } from "../../services/api";
import { useHistory, useLocation } from "react-router-dom";
import Comments from "../../Comments/Comments";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 80px",
    [theme.breakpoints.down("md")]: {
      padding: "0 17px",
    },
  },
  image: {
    width: "100%",
    height: "60vh",
    objectFit: "cover",
    minHeight: "500px",
    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  icons: {
    float: "right",
    "& > *": {
      display: "flex",
      flexDirection: "row",
    },
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
    },
  },
  subheading: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  Link: {
    color: "inherit",
    textDecoration: "none",
  },
}));
// every function has a default prop name match it uses to get data of url id
const DetailView = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const [post, setPost] = React.useState([]);
  const url = post.image || "https://source.unsplash.com/user/erondu/1620x900";
  React.useEffect(() => {
    const fetchData = async () => {
      let data = await readPostById(match.params.id);
      // console.log("defaultview", data);
      setPost(data);
    };
    fetchData();
  }, []);
  // console.log("Details View post", post);
  const deleteBlog = async function () {
    let data = await deletePost(post._id);
    history.push("/");
    // console.log("delete successfully");
  };
  return (
    <>
      <Box
        className={classes.image}
        style={{
          backgroundImage: `url('${url}')`,
        }}
      ></Box>
      <Box className={classes.container}>
        <Box>
          <Link to={`/update/${post._id}`}>
            <IconButton className={classes.icons}>
              <Edit style={{ color: "#FFE459" }} />
            </IconButton>
          </Link>

          <IconButton onClick={() => deleteBlog()} className={classes.icons}>
            <Delete style={{ color: "#FF4848" }} />
          </IconButton>
        </Box>
        <Typography className={classes.heading}>{post.title}</Typography>
        <Box className={classes.subheading}>
          <Link to={`/?username=${post.username}`} className={classes.Link}>
            <Typography>
              Author:{" "}
              <span
                style={{
                  fontWeight: 600,
                }}
              >
                {post.username}
              </span>
            </Typography>
          </Link>
          <Typography style={{ marginLeft: "auto" }}>
            {new Date(post.createDate).toDateString()}
          </Typography>
        </Box>
        <Typography>{post.description}</Typography>
        <Comments post={post} />
      </Box>
    </>
  );
};

export default DetailView;
