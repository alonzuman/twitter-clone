import { initialState } from "../contexts/UsersContext";

export const IS_FETCHING = 'USERS/IS_FETCHING';
export const SET_ALL = 'USERS/SET_ALL';
export const SET_ONE = 'USERS/SET_ONE';
export const ERROR = 'USERS/ERROR';

const usersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetched: false,
        isFetching: true
      }
    case SET_ALL:
      return {
        ...state,
        users: payload,
        isFetching: false,
        isFetched: true
      }
    case SET_ONE:
      return {
        ...state,
        currentUser: payload,
        isFetching: false,
        isFetched: true
      }
    case ERROR: return initialState;
    default: return state;
  }
}

export default usersReducer;
