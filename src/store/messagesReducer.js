const ADD_MESSAGE = "ADD_MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";

const defaultStore = {
  messages: [],
};

export const messagesReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {...state, messages: [...state.messages, action.payload]};
    case DELETE_MESSAGE:
      return {...state, messages: [...state.messages.filter(message => message.id != action.payload)]};
    default:
      return state;
  }
};

export const addMessageAction = (payload) => ({type: ADD_MESSAGE, payload});
export const deleteMessageAction = (payload) => ({type: DELETE_MESSAGE, payload});
