import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE    = 'INITIALIZE_USERS';
const CREATE        = 'CREATE_USER';


/* ------------   ACTION CREATORS     ------------------ */

const init   = users => ({ type: INITIALIZE, users });
export const create = user => ({ type: CREATE, user });



/* ------------       REDUCER     ------------------ */

export default function reducer (users = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.users;

    case CREATE:
      return [action.user, ...users];

    default:
      return users;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
       .then(res => dispatch(init(res.data)));
};

export const addUser = user => dispatch => {
  axios.post('/api/users', user)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating user: ${user} unsuccesful`, err));
};

