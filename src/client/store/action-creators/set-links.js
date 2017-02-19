import actions from '../actions';

const getLinks = () => fetch('/links')
  .then(response => {
    if(response.ok) {
      return response.json();
    }

    return Promise.reject(response);
  });

export default () =>
  async dispatch => {
    const links = await getLinks();

    dispatch({
      type: actions.SET_LINKS,
      links
    });
  };
