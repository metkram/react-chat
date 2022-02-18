import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessageAction } from "../store/messagesReducer";
import "../index.css";
import button from "../images/send.svg";

export function Message() {

  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  function changeMessage(e) {
    setMessage(e.target.value);
  }

  function sendMessage() {
    const messageObject = {
      message: message,
      id: Date.now(),
    };
    setMessage("");
    return dispatch(addMessageAction(messageObject));
  }

  return (
    <>
      <form>
        <input type="text" value={message} onChange={changeMessage} className="message-form" />
      </form>
      <img src={button} onClick={sendMessage} className="send-button" />
    </>
  );
}
