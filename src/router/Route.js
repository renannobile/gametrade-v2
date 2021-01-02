import DefaultLayout from "components/Layout";
import React from "react";
import { Route as BaseRoute } from "react-router-dom";

const Route = ({
  component: Component,
  layout: Layout = DefaultLayout,
  ...rest
}) => (
  <BaseRoute
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default Route;
