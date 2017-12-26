import { createFragmentContainer, graphql } from 'react-relay';
import Todo from './Todo';

export default createFragmentContainer(Todo, {
  todo: graphql`
      fragment TodoContainer_todo on Todo {
          timestamp
          id,
          text,
      }
  `,
  viewer: graphql`
      fragment TodoContainer_viewer on User {
          id,
          firstName,
          lastName
          totalCount,
      }
  `,
});