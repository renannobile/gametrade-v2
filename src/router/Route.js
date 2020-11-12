import Layout from "components/Layout";
import React from "react";
import { Route } from "react-router-dom";

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    )}
  />
);
