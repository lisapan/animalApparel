const initialUserState = {
  username: '',
  password: '',
};

export default function (state = initialUserState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    default:
      return state;

  }

  return newState;

}
