"use client";
import { FunctionComponent, useState } from "react";

const Sidebar = ({ handleSidebarToggle }) => {
  // allow users to select a conversation or create a new one
  const [conversations, setConversations] = useState([
    "conversation 1",
    "conversation 2",
    "conversation 3",
  ]);
  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div className="p-4 bg-gray-200 w-full min-w-max">
      <div className="container flex">
        <h2 className="p-4 text-2xl text-center tex font-bold mb-2">
          Conversations
        </h2>
      </div>
      <ul>
        {conversations.map((conversation) => (
          <li
            key={conversation}
            className={`cursor-pointer p-2 mb-2 rounded-md ${
              selectedConversation === conversation
                ? "bg-blue-400 text-white"
                : ""
            }`}
            onClick={() => handleConversationClick(conversation)}
          >
            {conversation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
