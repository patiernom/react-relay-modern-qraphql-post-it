import { createFragmentContainer, graphql } from 'react-relay';
import Footer from './Footer';

export default createFragmentContainer(Footer, {
  viewer: graphql`
      fragment FooterContainer_viewer on User {
          id
          username,
          email
      }
  `,
});