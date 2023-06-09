"use client";

import { useState } from "react";
import ChatContainer from "./ChatContainer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import React from "react";
type Conversation = {
  conId: number;
  data: {
    message: string;
    sender: string;
  }[];
};
const HomeScreen = () => {
  const [conversations, setConversations] = useState([
    {
      conId: 1,
      data: [
        { message: "hi", sender: "user" },
        { message: "This is chatgpt", sender: "server" },
      ],
    },
    {
      conId: 2,
      data: [
        { message: "hi", sender: "user" },
        { message: "This is chatgpt", sender: "server" },
      ],
    },
  ]);
  const [selectedConversationId, setselectedConversationId] = useState(
    conversations[0].conId
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <Navbar handleSidebarToggle={handleSidebarToggle} />
      <div className="lg:w-1/5 lg:min-w-max bg-gray-200 hidden lg:block">
        <Sidebar
          conversations={conversations}
          setConversations={setConversations}
          selectedConversationId={selectedConversationId}
          setselectedConversationId={setselectedConversationId}
        />
      </div>

      <div className="container mx-auto my-auto p-4">
        <h2 className="text-4xl text-center">AI: movie to emoji😃🤩🤗🤣</h2>
        <div className="bg-slate-200 rounded-3xl shadow-2xl mx-auto max-w-3xl">
          <ChatContainer
            setConversations={setConversations}
            selectedConversationId={selectedConversationId}
            conversations={conversations}
          />
        </div>
      </div>

      <div
        className={`fixed h-full w-1/4 lg:w-1/5 z-30  top-0 -left-0 transition-all duration-500 ease-in-out ${
          sidebarOpen ? "" : "-translate-x-full"
        } lg:block`}
        style={{ left: sidebarOpen ? 0 : "-100%" }}
      >
        <div className="bg-gray-200 h-full flex flex-row">
          <Sidebar
            conversations={conversations}
            setConversations={setConversations}
            selectedConversationId={selectedConversationId}
            setselectedConversationId={setselectedConversationId}
          />
        </div>
      </div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900 opacity-50 cursor-pointer z-20"
          onClick={handleSidebarToggle}
        />
      )}
    </>
  );
};

export default HomeScreen;
