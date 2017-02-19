import actions from '../actions';

const getLinks = () => {};

export default () =>
  async dispatch => {
    const links = await getLinks();

    dispatch({
      type: actions.SET_LINKS,
      links
    });
  };
