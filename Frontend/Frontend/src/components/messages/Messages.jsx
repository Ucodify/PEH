import React from "react";
import Message from "./Message.jsx";
import useListenMessages from "../hooks/useListenMessages.js";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";

const Messages = () => {
  const { messages, loading } = useGetMessages();

  useListenMessages();

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 relative flex flex-col overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
      <Message />
      <Message />
      {/* <Message />
      <Message /> */}
      {/* <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message /> */}
    </div>
  );
};

export default Messages;
