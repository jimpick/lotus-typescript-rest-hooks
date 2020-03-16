import React, { Suspense } from "react";
import { RouteChildrenProps } from 'react-router';
import { Route, Switch, RouteProps } from "react-router-dom";
import { NetworkErrorBoundary } from "rest-hooks";
import { Spin } from "antd";
import IssueList from "./pages/IssueList";
import IssueDetail from "./pages/IssueDetail";
import ProfileDetail from "./pages/ProfileDetail";
import Version from "./pages/Version";

// const repo: string = "https://api.github.com/repos/facebook/react"
const repo: string = "https://api.github.com/repos/filecoin-project/lotus"

export default () => (
  <Suspense
    fallback={
      <div className="center">
        <Spin size="large" />
      </div>
    }
  >
    <NetworkErrorBoundary>
      <Switch>
        <Route
          exact
          path="/"
          component={({ location }: RouteProps) => {
            const page = Number.parseInt(
              new URLSearchParams(location && location.search.substring(1)).get(
                "page"
              ) || "1"
            );
            return (
              <IssueList
                repositoryUrl={repo}
                page={page}
              />
            );
          }}
        />
        <Route
          exact
          path="/closed"
          component={() => (
            <IssueList
              repositoryUrl={repo}
              state="closed"
            />
          )}
        />
        <Route
          exact
          path="/open"
          component={() => (
            <IssueList
              repositoryUrl={repo}
              state="open"
            />
          )}
        />
        <Route exact path="/issues" component={IssueList} />
        <Route
          path="/issue/:number"
            component={(props: RouteChildrenProps<{ number: string }>) => (
            <IssueDetail
              {...props}
              repositoryUrl={repo}
            />
          )}
        />
        <Route exact path="/profile" component={ProfileDetail} />
        <Route exact path="/version" component={Version} />
      </Switch>
    </NetworkErrorBoundary>
  </Suspense>
);
