import React from "react";
import Conversation from "./Conversation.jsx";
import useGetConversations from "../hooks/useGetConversations.js";
import { getRandomEmoji } from "../../utils/emojis.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("Conversations rendered successfully");
  return (
    <div className="py-0 mt-0 relative mb-0 h-full bottom-3 flex flex-col overflow-auto bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 ">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
  
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
