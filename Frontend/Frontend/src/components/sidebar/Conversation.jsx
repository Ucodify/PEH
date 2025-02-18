// import React from "react";
// import useConversation from "../../zustand/useConversation.js";
// import { useSocketContext } from "../../context/SocketContext.jsx";

// const Conversation = ({ conversation, lastIdx, emoji }) => {
//   console.log("Conversation rendered successfully");
//   // console.log(conversation);
//   //console.log(conversation._id);
//   const { selectedConversation, setSelectedConversation } = useConversation();

//   const isSelected = selectedConversation?._id === conversation._id;
//   //const isSelected = selectedConversation === conversation;
//   const { onlineUsers } = useSocketContext();

//   const isOnline = onlineUsers.includes(conversation._id);
//   //const isOnline = onlineUsers.includes(conversation);
//   return (
//     <>
//       <div
//         className={` flex flex-1 gap-1 h-13 mt-0 items-center p-2 py-1 rounded cursor-pointer bg-emerald-950 hover:bg-gray-500 text-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30
//        ${isSelected ? "bg-sky-500" : ""} `}
//         onClick={() => setSelectedConversation(conversation)}
//       >
//         <div className="">
//           <div className={`avatar ${isOnline ? "online" : ""}`}>
//             <div className="w-8 mt-2 rounded-full">
//               <img src={conversation.profilePicture} alt="user avatar" />
//             </div>
//           </div>
//         </div>
//         <div className="text-xs flex flex-col flex-1">
//           <div className="flex gap-20">
//             <p className="font-bold m-1  text-slate-200 ms-3">
//               // {conversation.fullname}{" "}
//             </p>
//             <span>{emoji}</span>
//             {/* comment if not needed */}
//             <span className="mt-1 w-6">
//               <img
//                 className="mask mask-heart"
//                 src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
//               />
//             </span>
//           </div>
//         </div>
//       </div>
//       {!lastIdx && <div className="divider my-0 py-0 h-1" />}
//     </>
//   );
// };
// export default Conversation;
import React, { useState, useEffect } from 'react';

function Conversation({ conversationId }) { // Receive the conversation ID as a prop
    const [conversation, setConversation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConversation = async () => {
            try {
                const response = await fetch(`user/${conversationId}`); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setConversation(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchConversation();
    }, [conversationId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    if (!conversation || !conversation._id) {
        console.error("Conversation or conversation._id is undefined:", conversation);
        return <div>Invalid conversation data.</div>;
    }
    const { selectedConversation, setSelectedConversation } = useConversation();

      const isSelected = selectedConversation?._id === conversation._id;
     
      const { onlineUsers } = useSocketContext();
    
      const isOnline = onlineUsers.includes(conversation._id);

    return (
      <> <div className={` flex flex-1 gap-1 h-13 mt-0 items-center p-2 py-1 rounded cursor-pointer bg-emerald-950 hover:bg-gray-500 text-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30
               ${isSelected ? "bg-sky-500" : ""} `}
                onClick={() => setSelectedConversation(conversation)}
              >
                <div className="">
                  <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-8 mt-2 rounded-full">
                      <img src={conversation.profilePicture} alt="user avatar" />
                    </div>
                  </div>
                </div>
                <div className="text-xs flex flex-col flex-1">
                  <div className="flex gap-20">
                    <p className="font-bold m-1  text-slate-200 ms-3">
                      // {conversation.fullname}{" "}
                    </p>
                    <span>{emoji}</span>
                    {/* comment if not needed */}
                    <span className="mt-1 w-6">
                      <img
                        className="mask mask-heart"
                        src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
                      />
                    </span>
                  </div>
                </div>
              </div>
              {!lastIdx && <div className="divider my-0 py-0 h-1" />}
            </>
  );
}

export default Conversation;