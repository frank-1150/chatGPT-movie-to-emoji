"use client";
import React from "react";
import { useState } from "react";

type Conversation = {
  conId: number;
  data: Array<{ message: string; sender: string }>;
};

type SidebarProps = {
  conversations: Conversation[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
  selectedConversationId: number;
  setselectedConversationId: React.Dispatch<React.SetStateAction<number>>;
};

const Sidebar: React.FC<SidebarProps> = ({
  conversations,
  setConversations,
  selectedConversationId,
  setselectedConversationId,
}) => {
  const handleConversationClick = (conversationId: number) => {
    setselectedConversationId(conversationId);
  };

  return (
    <div className="p-4 bg-gray-200 w-full min-w-max">
      <div className="container flex flex-col">
        <h2 className="p-4 text-2xl text-center tex font-bold mb-2">
          Conversations
        </h2>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => {
            // create a new conversation object with a unique ID
            const newConversation = {
              conId: conversations.length + 1,
              data: [],
            };
            // add the new conversation to the conversations array
            setConversations([...conversations, newConversation]);
            // select the newly created conversation
            setselectedConversationId(newConversation.conId);
          }}
        >
          New Conversation
        </button>
      </div>
      <ul>
        {conversations.map((conversation: Conversation) => (
          <li
            key={conversation.conId}
            className={`cursor-pointer p-2 mb-2 rounded-md ${
              selectedConversationId === conversation.conId
                ? "bg-blue-400 text-white"
                : ""
            }`}
            onClick={() => handleConversationClick(conversation.conId)}
          >
            Conversation {conversation.conId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
