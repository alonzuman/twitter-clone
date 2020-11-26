export const IS_FETCHING = 'USERS/IS_FETCHING';
export const IS_UPDATING = 'USERS/IS_UPDATING';
export const IS_DELETING = 'USERS/IS_DELETING';
export const SET_USER = 'USERS/SET_USER';
export const SIGNED_OUT = 'USERS/SIGNED_OUT';

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case SET_USER:
      return {
        ...state,
        user: {...payload},
        isFetching: false,
        isFetched: true,
        isAuth: true
      }
    case SIGNED_OUT:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        isAuth: false
      }
    default: return state;
  }
}

export default authReducer;
