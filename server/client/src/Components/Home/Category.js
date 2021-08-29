import React from "react";
import {
  Button,
  makeStyles,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@material-ui/core";
import { category } from "../../content/data";
import { Link, useLocation } from "react-router-dom";
import { readPost } from "../../services/api";
const useStyles = makeStyles({
  create: {
    margin: 20,
    border: "1px solid #6495ed",
    background: "transparent",
    color: "#6495ed",
    width: "86%",
    transform: "scale(1)",
    transition: "all .5s ease",
    "&:hover": {
      transition: "all .5s ease",
      transform: "scale(1.1)",
      color: "#FFFFFF",
      background: "#6495ed",
      boxShadow: "none",
    },
  },
  tableborder: {
    border: "none",
    "& :hover": {
      color: "#6495ed",
      cursor: "pointer",
    },
    "& > *:hover": {
      color: "#6495ed",
      cursor: "pointer",
    },
  },
  content: {
    "& :hover": {
      color: "#6495ed",
    },
  },
  Link: {
    color: "inherit",
    textDecoration: "none",
  },
});

const Category = () => {
  const classes = useStyles();
  const { search } = useLocation();
  React.useEffect(() => {
    const fetchData = async () => {
      await readPost(search);
    };
    fetchData();
  }, [search]);
  return (
    <>
      <Link to={"/create"} style={{ textDecoration: "none", color: "inherit" }}>
        <Button variant="contained" className={classes.create}>
          Create Blog
        </Button>
      </Link>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableborder}>
              <Link to={`/`} className={classes.Link}>
                <span className={classes.content}>All Category</span>
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.map((cat) => {
            return (
              <>
                <TableRow>
                  <TableCell className={classes.tableborder}>
                    <Link to={`/?category=${cat}`} className={classes.Link}>
                      <span className={classes.content}>{cat}</span>
                    </Link>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Category;
