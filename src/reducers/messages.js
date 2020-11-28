import { initialState } from '../contexts/MessagesContext';

export const IS_FETCHING = 'MESSAGES/IS_FETCHING';
export const SET_ALL = 'MESSAGES/SET_ALL';
export const SET_ONE = 'MESSAGES/SET_ONE';
export const SET_ACTIVE_CHAT_ID = 'MESSAGES/SET_ACTIVE_CHAT_ID';
export const ERROR = 'MESSAGES/ERROR';

const messagesReducer = (state, action) => {
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
        chats: [...payload],
        isFetching: false,
        isFetched: true
      }
    case SET_ACTIVE_CHAT_ID:
      return {
        ...state,
        activeChatId: payload
      }
    case SET_ONE:
      return {
        ...state,
        chats: [
          ...state?.chats?.filter(chat => chat.id !== payload.chat.id) || [],
          { ...payload.chat }
        ],
        isFetching: false,
        isFetched: true,
      }
    case ERROR: return initialState;
    default: return state;
  }
}

export default messagesReducer;
