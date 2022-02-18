import { useDispatch, useSelector } from "react-redux";
import { deleteMessageAction } from "../store/messagesReducer";
import "../index.css";

export function Chat() {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.allMessages.messages);

  function deleteMessage(id) {
    dispatch(deleteMessageAction(id));
  }
  console.log(messages);
  return (
    <div className="chat">
      {messages.map(message =>
        <div key={message.id} className="post" onClick={() => deleteMessage(message.id)}>
          <div className="messageText">{message.message}</div>
          <div className="date">{new Date(message.id).getHours().toString()}:{new Date(message.id).getMinutes().toString()}</div>
        </div>)}
    </div>
  );
}
