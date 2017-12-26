import utils from '../client/lib/utils';

describe('Avatar with initials ', () => {
  it('when first and last name are filled', () => {
    const user = { id: '0', firstName: 'Marco', lastName: 'Patierno' };
    const result = utils.getAvatar(user);

    expect(result).toBe('MP');
  });

  it('when only username is filled', () => {
    const user = { id: '0', firstName: '', lastName: '', username: 'patiernom' };
    const result = utils.getAvatar(user);

    expect(result).toBe('PA');
  });

  it('when is empty', () => {
    const user = { id: '0', firstName: '', username: '' };
    const result = utils.getAvatar(user);

    expect(result).toBe('GU');
  });
});

describe('Title with name ', () => {
  it('when first and last name are filled', () => {
    const user = { id: '0', firstName: 'Marco', lastName: 'Patierno' };
    const result = utils.getUserTitle(user);

    expect(result).toBe('Marco Patierno');
  });

  it('when only username is filled', () => {
    const user = { id: '0', firstName: '', lastName: '', username: 'patiernom' };
    const result = utils.getUserTitle(user);

    expect(result).toBe('patiernom');
  });

  it('when is empty', () => {
    const user = { id: '0', firstName: '', username: '' };
    const result = utils.getUserTitle(user);

    expect(result).toBe('Guest User');
  });
});