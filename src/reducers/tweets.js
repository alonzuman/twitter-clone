export const IS_FETCHING = 'TWEETS/IS_FETCHING';
export const IS_ADDING = 'TWEETS/IS_ADDING';
export const DIALOG_OPEN = 'TWEETS/DIALOG_OPEN';
export const DIALOG_CLOSED = 'TWEETS/DIALOG_CLOSED';
export const SET_TWEETS = 'TWEETS/SET_TWEETS';
export const ADD_TWEET = 'TWEETS/ADD_TWEET';
export const EDIT_TWEET = 'TWEETS/EDIT_TWEET';
export const DELETE_TWEET = 'TWEETS/DELETE_TWEET';

const tweetsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetched: false,
        isFetching: true
      }
    case IS_ADDING:
      return {
        ...state,
        isAdded: false,
        isAdding: true
      }
    case EDIT_TWEET:
      return {
        ...state,
        newTweet: {
          ...state.newTweet,
          ...payload
        },
        isAdding: false,
        isAdded: false
      }
    case DIALOG_OPEN:
      return {
        ...state,
        dialogOpen: true
      }
    case DIALOG_CLOSED:
      return {
        ...state,
        dialogOpen: false
      }
    case SET_TWEETS:
      return {
        ...state,
        tweets: {
          ...state.tweets,
          ...payload
        },
        isFetching: false,
        isFetched: true
      }
    case ADD_TWEET:
      return {
        ...state
      }
    default: return state;
  }
}

export default tweetsReducer;
