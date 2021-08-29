import React from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header";
import DetailView from "./Components/Posts/DetailView";
import CreateView from "./Components/Posts/CreateView";
import UpdateView from "./Components/Posts/UpdateView";
import Login from "./account/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { oktaAuthConfig, oktaSignInConfig } from "./config";
import { useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Box } from "@material-ui/core";

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };
  return (
    <>
      <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri}
      >
        {/* <AppWithRouterAccess /> */}
        <SecureRoute path="/" component={Header} />
        <Box style={{ marginTop: 75, marginLeft: 0, marginRight: 0 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={DetailView} />
            <Route exact path="/create" component={CreateView} />
            <Route exact path="/update/:id" component={UpdateView} />
            <Route
              path="/login"
              render={() => <Login config={oktaSignInConfig} />}
            />
            <Route path="/login/callback" component={LoginCallback} />
          </Switch>
        </Box>
      </Security>
    </>
  );
};

export default AppWithRouterAccess;
