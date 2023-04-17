import { ReactElement, JSXElementConstructor, ReactFragment } from "react";

// Build a component that will display the conversation box
const ConversationBox = (props) => {
  const messageList = props.data;
  return (
    <>
      <div className="flex flex-col gap-4">
        {messageList.map(
          (
            message: {
              sender: string;
              message:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | null
                | undefined;
            },
            index
          ) => {
            return (
              <>
                {message.sender === "user" ? (
                  <div className="flex flex-row gap-4 justify-end" key={index}>
                    <div className="border-solid bg-orange-200 shadow-lg rounded-xl p-2 px-4">
                      {message.message}
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex flex-row gap-4 justify-start"
                    key={index}
                  >
                    <div className="border-solid bg-rose-200 shadow-lg rounded-xl p-2 px-4">
                      {message.message}
                    </div>
                  </div>
                )}
              </>
            );
          }
        )}
      </div>
    </>
  );
};

export default ConversationBox;
