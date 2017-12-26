import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import TodoList from './TodoList';

export default createFragmentContainer(TodoList, {
  viewer: graphql`
      fragment TodoListContainer_viewer on User {
          todos(
              first: 2147483647  # max GraphQLInt
          ) @connection(key: "TodoList_todos") {
              edges {
                  node {
                      id,
                      timestamp
                      ...TodoContainer_todo,
                  },
              },
          },
          id,
          ...TodoContainer_viewer,
      }
  `,
});