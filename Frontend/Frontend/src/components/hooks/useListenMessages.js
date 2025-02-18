import React, { useEffect } from 'react';

import { useSocketContext } from '../../context/SocketContext.jsx';

import useConversation from "../../Zustand/useConversation.js";

import notificationSound from "../../assets/sounds/notification-sound.mp3";

const useListenMessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation();
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        });
        //to prevent multiple ringing according to the number of listeners
        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
}

export default useListenMessages
