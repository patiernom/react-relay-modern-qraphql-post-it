import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import React from 'react';
import ReactDOM from 'react-dom';
import { installRelayDevTools } from 'relay-devtools';
import modernEnvironment from './Environment';
import TodoApp from './components/TodoApp/TodoApp';

// Useful for debugging, but remember to remove for a production deploy.
// installRelayDevTools();

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);

ReactDOM.render(
  <QueryRenderer
    environment={modernEnvironment}
    query={graphql`
      query appQuery {
        viewer {
          ...TodoApp_viewer
        }
      }
    `}
    variables={{}}
    render={({error, props}) => {
      if (props) {
        return <TodoApp viewer={props.viewer} />;
      } else {
        return <div>Loading</div>;
      }
    }}
  />,
  rootNode
);
