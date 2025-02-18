import React, { useEffect } from "react";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    //cleanup function (unmounts components)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const noChatSelected = true;

  console.log("Message Container rendered successfully");

  return (
    <div>
      <div className=" flex flex-col md:min-w-[450px] bg-clip-border bg-opacity-100">
        {noChatSelected ? (
          <NoChatSelected />
        ) : (
          <>
            {/* Header */}
            <div className="bg-gray-500 px-4 py-2 mb-2">
              <span className="label-text">To: </span>{" "}
              <span className="text-gray-900 font-bold">
                {" "}
                {selectedConversation.fullname}
              </span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
      </div>
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuth();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 mt-14 ">
        <p>Welcome {authUser.fullname}</p>
        <p>Chat with your Lawyer</p>
        <p>Click on a chat to start messaging now!</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
