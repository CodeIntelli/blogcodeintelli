import React from "react";
import PostDetails from "./PostDetails";
import { Grid, makeStyles } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { readPost } from "../../services/api";
const useStyles = makeStyles({
  card: {
    "& :hover": {
      transform: "scale(1.05)",
      transition: "all 0.5s ease-in-out",
      boxShadow:
        " rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
    },
  },
});
const Post = () => {
  const [posts, setPosts] = React.useState([]);
  const classes = useStyles();
  const { search } = useLocation();
  React.useEffect(() => {
    const fetchData = async () => {
      let data = await readPost(search);
      setPosts(data);
    };
    fetchData();
  }, [search]);
  return (
    <>
      {/* here if we repeating post then they can display in one line for solve this issue we are put container keyword on grid tag in home.js */}

      {posts.map((posts, index) => {
        return (
          <>
            <Grid
              item
              className={classes.card}
              key={index}
              lg={3}
              sm={3}
              xs={12}
            >
              <Link
                to={`/details/${posts._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <PostDetails posts={posts} i={index} />
              </Link>
            </Grid>
          </>
        );
      })}
    </>
  );
};

export default Post;
