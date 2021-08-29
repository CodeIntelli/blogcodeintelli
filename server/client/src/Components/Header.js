import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
const useStyles = makeStyles({
  navbar: {
    background: "#fff",
    color: "#000",
  },
  navbarContent: {
    justifyContent: "center",
    padding: 5,
    "& > *": {
      padding: 20,
      transition: "all 0.5s ease-in-out",
      "&:hover": {
        color: "#273c75",
        fontWeight: "bold",
        cursor: "pointer",
        transform: "scale(1.2)",
        transition: "all 0.5s ease-in-out",
      },
    },
  },
});

const Header = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const history = useHistory();
  const classes = useStyles();

  if (authState && authState.isPending) return null;

  const login = async () => history.push("/login");

  const logout = async () => oktaAuth.signOut();
  const button = authState.isAuthenticated ? (
    <button
      style={{
        border: "none",
        background: "unset",
        textTransform: "uppercase",
        fontSize: 17,
        cursor: "pointer",
      }}
      onClick={logout}
    >
      <span>Logout</span>
    </button>
  ) : (
    <button
      style={{
        border: "none",
        background: "unset",
        textTransform: "uppercase",
        fontSize: 17,
        cursor: "pointer",
      }}
      onClick={login}
    >
      <span>Login</span>
    </button>
  );
  return (
    <>
      <AppBar className={classes.navbar}>
        <Toolbar className={classes.navbarContent}>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
            <Typography>HOME</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/about"}
          >
            <Typography>ABOUT</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/contact"}
          >
            <Typography>CONTACT</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/login"}
          >
            <Typography>{button}</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
