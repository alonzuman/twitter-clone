import { initialState } from '../contexts/ProfileContext';
export const IS_FETCHING = 'PROFILE/IS_FETCHING';
export const SET_PROFILE = 'PROFILE/SET_PROFILE';
export const CLEAR_PROFILE = 'PROFILE/CLEAR_PROFILE';
export const ERROR = 'PROFILE/ERROR';

const profileReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case SET_PROFILE:
      return {
        ...state,
        isAuth: true,
        user: payload,
        isFetching: false
      }
    case CLEAR_PROFILE:
      return {
        user: {},
        isAuth: false,
        isFetching: false
      }
    case ERROR: return initialState;
    default: return state;
  }
}

export default profileReducer;
