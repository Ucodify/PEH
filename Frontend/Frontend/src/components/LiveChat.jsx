import React from "react";
import Sidebar from "./sidebar/Sidebar.jsx";
import MessageContainer from "./messages/MessageContainer.jsx";

const LiveChat = () => {
  console.log("LiveChat component rendered");
  return (
    <>
      <div className="relative">
        <div className="flex text-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 absolute right-2 bottom-0 sm:h-[250px] md:w-[720px] sm:w-[480px] md:h-[300px] rounded-lg bg-neutral-800 text-white overflow-auto">
          <Sidebar />
          <MessageContainer />
        </div>
      </div>
    </>
  );
};
export default LiveChat;
