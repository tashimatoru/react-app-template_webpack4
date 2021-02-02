import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Wrap from 'modules/wrap';

const Index   = lazy(() => import('contents/index'));
const Hoge    = lazy(() => import('contents/hoge'));
const Search  = lazy(() => import('contents/search'));

const Router = props => {
  return (
    <BrowserRouter>
      <Wrap>
        <Suspense
          fallback={
            <div>loading</div>
          }
        >
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Index />}
            />
            <Route
              exact
              path="/hoge"
              render={(props) => <Hoge />}
            />
            <Route
              exact
              path="/search"
              render={(props) => <Search />}
            />
          </Switch>
        </Suspense>
      </Wrap>
    </BrowserRouter>
  );
};

// defaultProps
Router.defaultProps = {};

export default Router;
