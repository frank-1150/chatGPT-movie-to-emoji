import { useEffect, useState } from "react";

export const useChatgpt = (userInput: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchChatgpt = async (userInput: string) => {
      setIsLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(`/api/chatgpt?userInput=${userInput}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
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
