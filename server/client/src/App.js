import React from "react";
// import Home from "./Components/Home/Home";
// import Header from "./Components/Header";
// import DetailView from "./Components/Posts/DetailView";
// import CreateView from "./Components/Posts/CreateView";
// import UpdateView from "./Components/Posts/UpdateView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppWithRouterAccess from "./AppWithRouterAccess";
// import { Box } from "@material-ui/core";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppWithRouterAccess />
        {/* <Header />
        <Box style={{ marginTop: 75, marginLeft: 0, marginRight: 0 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={DetailView} />
            <Route exact path="/create" component={CreateView} />
            <Route exact path="/update/:id" component={UpdateView} />
          </Switch>
        </Box> */}
      </BrowserRouter>
    </>
  );
};

export default App;
