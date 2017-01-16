import { RETRIEVE_SUBMITTED_ORDER } from './action-creators/constants'

export default function (state = [], action) {
  switch (action.type) {

    case RETRIEVE_SUBMITTED_ORDER: return action.submittedOrder;

    default: return state;

  }
}
