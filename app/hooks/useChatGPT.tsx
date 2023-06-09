import { NextResponse } from "next/server";
import { useEffect, useState } from "react";

type ChatgptResponse = {
  response?: string;
  error?: { message: string; name: string; stack: string };
};

export const useChatgpt = (userInput: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<ChatgptResponse | null>(null);
  useEffect(() => {
    const fetchChatgpt = async (userInput: string) => {
      setIsLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(`/api/chatgpt?userInput=${userInput}`);
        const data = await response.json();
        setData(data);
      } catch (error: any | NextResponse) {
        setError(error);
      }

      setIsLoading(false);
    };
    if (userInput && userInput !== "") {
      fetchChatgpt(userInput);
    }
  }, [userInput]);

  return { isLoading, error, data };
};
