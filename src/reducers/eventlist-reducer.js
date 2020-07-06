export default (state = {}, action) => {
  const {  title, location, description, occurrences, id  } = action;
  switch (action.type) {
  case 'ADD_EVENT':
    return Object.assign({}, state, {
      [id]: {
         title: title,
        location: location,
        description: description,
        occurrences: occurrences,
        id: id
      }
    });
  case 'DELETE_EVENT':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};