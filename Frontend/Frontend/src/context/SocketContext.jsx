import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import io from "socket.io-client";
//import { AuthContext } from "../context/AuthProvider.jsx";

const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuth();
  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:4001", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      //socket.on() is used to listen to the events can be used both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
