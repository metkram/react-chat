import { useDispatch, useSelector } from "react-redux";
import { deleteMessageAction } from "../store/messagesReducer";

export function Chat() {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.allMessages.messages);

  function deleteMessage(id) {
    dispatch(deleteMessageAction(id));
  }

  return (
    <>
      {messages.map(message => <div key={message.id} onClick={() => deleteMessage(message.id)}>{message.message}</div>)}
    </>
  );
}
