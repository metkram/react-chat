import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessageAction } from "../store/messagesReducer";

export function Message() {

  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  function changeMessage(e) {
    setMessage(e.target.value);
  }

  function sendMessage() {
    const messageObject = {
      message: message,
      id: new Date(),
    };
    setMessage("");
    return dispatch(addMessageAction(messageObject));
  }

  return (
    <>
      <form>
        <input type="text" value={message} onChange={changeMessage} />
        <input type="button" value="send" onClick={sendMessage} disabled={!message} />
      </form>
    </>
  );
}
