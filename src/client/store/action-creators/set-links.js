import actions from '../actions';

const getLinks = () =>
  fetch('/links', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: '{links{title,url}}'
    })
  })
  .then(response => {
    if(response.ok) {
      return response.json();
    }

    return Promise.reject(response);
  });

export default () =>
  async dispatch => {
    const {data: {links}} = await getLinks();

    dispatch({
      type: actions.SET_LINKS,
      links
    });
  };
