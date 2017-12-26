const hasCompleteName = user => (
  user.firstName &&
  user.lastName &&
  user.firstName.length > 0 &&
  user.lastName.length > 0
);

export default {
  getAvatar: (user) => {
    if (hasCompleteName(user)) {
      return `${user.firstName.charAt(0).toUpperCase()}${user.lastName.charAt(0).toUpperCase()}`;
    }

    if (user.username && user.username.length > 0) {
      return user.username.substring(0, 2).toUpperCase();
    }

    return 'GU';
  },
  getUserTitle: (user) => {
    if (hasCompleteName(user)) {
      return `${user.firstName} ${user.lastName}`;
    }

    if (user.username && user.username.length > 0) {
      return user.username;
    }

    return 'Guest User';
  }
};