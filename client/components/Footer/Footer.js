import React from 'react';
import PropTypes from 'prop-types';
import { Footer as MDLFooter, FooterSection } from 'react-mdl';
import styles from './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <MDLFooter className={styles.root} size='mini'>
        <FooterSection type='middle'>
          <span>Handcrafted with ♥ by <a href={`mailto:${this.props.viewer.email}`}> @{this.props.viewer.username}</a></span>
        </FooterSection>
      </MDLFooter>
    );
  }
}

Footer.propTypes = {
  viewer: PropTypes.object.isRequired
};

Footer.defaultProps = {};

export default Footer;
