import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { extractTime } from "../../utils/extractTime.js";
import { useAuth } from "../../context/AuthProvider.jsx";

const Message = ({ message }) => {
  const { authUser } = useAuth();

  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;

  const formattedTime = extractTime(message.createdAt);

  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const profilePicture = fromMe
    ? authUser.profilePicture
    : selectedConversation?.profilePicture;

  const bubblebgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <>
      <div className="text-xs">
        <div className={`chat ${chatClassName}`}>
          <div className="chat-image avatar">
            <div className="w-8 rounded-full">
              <img alt="chat bubble component" src={profilePicture} />
            </div>
          </div>
          <div className="chat-header">
            {fullname}
            {/* <time className="text-xs opacity-50">{formattedTime}</time> */}
          </div>
          <div
            className={`chat-bubble w-auto pb-2 text-xs ${bubblebgColor} ${shakeClass} `}
          >
            {message.message}{" "}
          </div>
          <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
            {formattedTime}
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
