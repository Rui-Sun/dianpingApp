export default (state = {}, action) => {
  switch(action.type) {
    case 'USER_INFO_UPDATE':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}