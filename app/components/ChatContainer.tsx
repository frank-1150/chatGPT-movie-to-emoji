"use client";
import { TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import ConversationBox from "./ConversationBox";
import { useChatgpt } from "../hooks/useChatGPT";
interface Props {
  conversations: {
    conId: number;
    data: { message: string; sender: string }[];
  }[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
  selectedConversationId: number;
}
type Conversation = {
  conId: number;
  data: Array<{ message: string; sender: string }>;
};

const ChatContainer: React.FC<Props> = ({
  conversations,
  setConversations,
  selectedConversationId,
}) => {
  const selectedConversation = conversations.find(
    (con: Conversation) => con.conId === selectedConversationId
  );
  const [pendingMessage, setPendingMessage] = useState("");
  const [message, setMessage] = useState("");
  const [historyMessage, setHistoryMessage] = useState(
    selectedConversation ? selectedConversation.data : []
  );

  const { data, isLoading, error } = useChatgpt(message);

  // update the history message with the data from the useChatgpt hook
  useEffect(() => {
    if (data) {
      if (data.error) {
        // display the error message
        setHistoryMessage([
          ...historyMessage,
          { message: data.error.message, sender: "server" },
        ]);
        return;
      } else if (data.response) {
        console.log("display the message", data);
        setHistoryMessage([
          ...historyMessage,
          { message: data.response, sender: "server" },
        ]);
      }
    }
  }, [data]);

  // set selected conversation when conversations change
  useEffect(() => {
    const selectedConversation = conversations.find(
      (con: Conversation) => con.conId === selectedConversationId
    );
    if (selectedConversation) {
      setHistoryMessage(selectedConversation.data);
    }
  }, [conversations, selectedConversationId]);

  // update conversation history when history message changes
  useEffect(() => {
    const newConversations = conversations.map((con: Conversation) => {
      if (con.conId === selectedConversationId) {
        return { ...con, data: historyMessage };
      }
      return con;
    });
    setConversations(newConversations);
  }, [historyMessage]);

  const handleFormSubmit = () => {
    if (pendingMessage === "") {
      alert("Please enter a message");
      return;
    }
    // if message is the same as the last message in the history with sender as user
    // then do not add it to the history, alert the user
    if (
      historyMessage.filter((msg) => msg.sender === "user").length > 0 &&
      historyMessage.filter((msg) => msg.sender === "user")[
        historyMessage.filter((msg) => msg.sender === "user").length - 1
      ].message === pendingMessage
    ) {
      alert("Please enter a different message");
      return;
    }
    // set the message to the pending message
    setMessage(pendingMessage);
    // add the message to the history
    setHistoryMessage([
      ...historyMessage,
      { message: pendingMessage, sender: "user" },
    ]);
    setPendingMessage("");
    // fetch the response from the server using the message and hook
  };

  return (
    <>
      <div className="container flex justify-center overflow-y-auto">
        <div className="flex flex-col  gap-4 p-6">
          <h1 className="text-left">
            Write the movie name in this box and press send~
          </h1>
          <div className="flex gap-4">
            {/* / input box can be strectched to full width */}
            <TextField
              className="flex-grow"
              type="text"
              onChange={(e) => {
                setPendingMessage(e.target.value);
              }}
              value={pendingMessage}
            />

            <Button
              className="border-r-rose-200"
              variant="outlined"
              onClick={() => {
                handleFormSubmit();
              }}
            >
              Send
            </Button>
          </div>
          {/* add a scrolling box */}
          <div className="overflow-auto p-4">
            {historyMessage ? (
              <ConversationBox data={historyMessage} />
            ) : (
              "No historical message Error"
            )}
            {isLoading && <p>Loading...</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
