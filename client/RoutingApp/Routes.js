import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';
import { graphql } from 'react-relay';
import App from '../components/TodoApp/TodoApp';

const query = graphql`
query Routes_App_Query {
  viewer {
    ...TodoAppContainer_viewer
  }
}`;

export default makeRouteConfig(<Route path='/' Component={App} query={query} />);
