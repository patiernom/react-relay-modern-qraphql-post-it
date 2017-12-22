import React from 'react';
import PropTypes from 'prop-types';
import { Header, Navigation, Drawer, Layout, Icon, Card, CardTitle, CardText } from 'react-mdl';
import styles from './Navbar.scss';

class Navbar extends React.Component {
  render() {
    const { title, msgNumber, user, children } = this.props;

    return (
      <div className={styles.root}>
        <Layout fixedHeader fixedDrawer>
          <Header title={title}>
            <div className='msgNumber'><span><Icon name='create' /> {msgNumber}</span></div>
          </Header>
          <Drawer title={
            <Card shadow={0} style={{ height: '320px', width: '239px' }}>
              <div className={'user-avatar-container'}>
                <div className={'user-avatar'} style={{ backgroundImage: 'url(https://www.comedy.co.uk/images/library/comedies/180x200/f/fur_tv.jpg)' }} />
              </div>
              <CardTitle expand>{`Welcome back ${user.title}`}</CardTitle>
              <CardText>
                <div>Username: {user.username}</div>
                <div>Email: {user.email}</div>
              </CardText>
            </Card>}
          >
            <Navigation>
              <a href='https://github.com/patiernom/react-relay-modern-qraphql-post-it' target='_blank' rel='noopener noreferrer'>Help</a>
            </Navigation>
          </Drawer>
          {children}
        </Layout>
      </div>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string,
  msgNumber: PropTypes.number,
  user: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired
};

Navbar.defaultProps = {
  title: '',
  msgNumber: 0
};

export default Navbar;
