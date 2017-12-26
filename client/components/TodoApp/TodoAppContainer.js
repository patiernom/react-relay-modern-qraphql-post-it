import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import TodoApp from './TodoApp';

export default createFragmentContainer(TodoApp, {
  viewer: graphql`
      fragment TodoAppContainer_viewer on User {
          id,
          firstName,
          lastName
          username
          email
          totalCount,
          ...TodoListContainer_viewer,
          ...FooterContainer_viewer,
      }
  `,
});