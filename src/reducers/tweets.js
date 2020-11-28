export const IS_FETCHING = 'TWEETS/IS_FETCHING';
export const IS_ADDING = 'TWEETS/IS_ADDING';
export const NEW_TWEET_DIALOG_OPEN = 'TWEETS/NEW_TWEET_DIALOG_OPEN';
export const NEW_REPLY_DIALOG_OPEN = 'TWEETS/NEW_REPLY_DIALOG_CLOSED';
export const NEW_TWEET_DIALOG_CLOSED = 'TWEETS/NEW_TWEET_DIALOG_CLOSED';
export const NEW_REPLY_DIALOG_CLOSED = 'TWEETS/NEW_REPLY_DIALOG_OPEN';
export const SET_TWEETS = 'TWEETS/SET_TWEETS';
export const SET_TWEET = 'TWEETS/SET_TWEET';
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
    case NEW_TWEET_DIALOG_OPEN:
      return {
        ...state,
        newTweetDialogOpen: true
      }
    case NEW_TWEET_DIALOG_CLOSED:
      return {
        ...state,
        newTweetDialogOpen: false
      }
    case NEW_REPLY_DIALOG_OPEN:
      return {
        ...state,
        tweets: {
          ...state.tweets,
          currentTweet: payload,
        },
        newReplyDialogOpen: true
      }
    case NEW_REPLY_DIALOG_CLOSED:
      return {
        ...state,
        newReplyDialogOpen: false
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
        ...state,
        isAdding: false
      }
    default: return state;
  }
}

export default tweetsReducer;
