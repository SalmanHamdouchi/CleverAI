import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllMessages,
  addMessage,
  generateCodeThunk,
  selectLoading,
} from "../features/code/code-slice";

import toast, { Toaster } from "react-hot-toast";
import { Code } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Empty from "./Empty";
import Loader from "./Loader";
import Avatar from "./Avatar";

const CodeGeneration = () => {
  let dispatch = useDispatch();
  let messages = useSelector(selectAllMessages);
  let isLoading = useSelector(selectLoading);

  const [formData, setFormData] = useState({
    prompt: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.prompt || !formData.prompt.trim()) {
      toast.error("Please fill in the prompt!");
      return;
    }
    dispatch(generateCodeThunk(formData.prompt)).then((result) => {
      if (result.error) {
        toast.error(result.payload);
        return;
      }
      dispatch(addMessage(formData.prompt));
    });
  };

  return (
    <div className="flex flex-col md:px-10">
      <Toaster />
      <div className="flex items-center mb-10">
        <div
          className={`h-16 w-16 flex items-center justify-center rounded-md mr-3 text-yellow-500 bg-yellow-500/10`}>
          {<Code size={42} />}
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Code</h2>
          <p className="mt-1 text-lg">Generate code using descriptive text</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex xl:flex-row flex-col xl:justify-between rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm ">
        <textarea
          type="text"
          id="prompt"
          name="prompt"
          value={formData.prompt}
          onChange={handleInputChange}
          placeholder="React component with dynamic tailwind classes..."
          className="resize-none w-full xl:grow-1 min-h-5 border-0 outline-none focus-visible:ring focus-visible:ring-transparent xl:pr-8 xl:pb-0 sm:pr-0 overflow-hidden overflow-y-auto"></textarea>
        <button
          className="w-full xl:w-28 rounded-md py-2 bg-[#121725] text-white font-semibold"
          type="submit">
          Generate
        </button>
      </form>
      <div className="space-y-4 mt-4">
        {isLoading && (
          <div className="p-8 rounded-lg w-full flex justify-center items-center bg-[#EFF3F8]">
            <Loader />
          </div>
        )}
        {messages && messages.length === 0 && !isLoading && (
          <Empty label="No code generated!" />
        )}
        <div className="flex flex-col-reverse gap-y-4">
          {messages &&
            messages.map((message, index) => (
              <div
                key={index}
                className={`py-6 px-8 w-full flex gap-x-8 border rounded-lg items-center border-black/10 ${
                  message.role === "user" ? "bg-white" : "bg-[#EFF3F8]"
                }`}>
                {message.role === "user" ? (
                  <Avatar imageURL="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                ) : (
                  <Avatar imageURL="/logo.png" />
                )}
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="font-mono overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    ),
                  }}
                  className="text-md overflow-hidden leading-7 ">
                  {message.content}
                </ReactMarkdown>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CodeGeneration;
