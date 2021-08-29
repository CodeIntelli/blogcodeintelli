import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  banner_img: {
    background: `url(${"https://source.unsplash.com/user/erondu/1603x902"}) center/55% no-repeat #000`,
    backgroundSize: "cover",
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "80vh",
    marginTop: -10,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& :first-child": {
      fontWeight: "bold",
      fontSize: 72,
      color: "#273c75",
    },
    "& :last-child span": {
      fontWeight: "bold",
      fontSize: 34,
      color: "#000",
    },
    "& :last-child": {
      fontSize: 32,
      background: "#fff",
      padding: 4,
    },
  },
});
const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.banner_img}>
        <Typography>Blog</Typography>
        <Typography>
          Present By <Box component="span">CodeIntelli</Box>
        </Typography>
      </Box>
    </>
  );
};

export default Banner;
