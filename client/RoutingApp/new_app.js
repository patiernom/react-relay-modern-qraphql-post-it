import 'todomvc-common';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { installRelayDevTools } from 'relay-devtools';
import Router from './Router';

// Useful for debugging, but remember to remove for a production deploy.
installRelayDevTools();

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootNode
  );
};

render(Router);

if (module.hot) {
  module.hot.accept('./Router', () => { render(Router); });
}
