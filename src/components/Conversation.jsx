import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

const Conversation = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.prompt.trim()) {
      validationErrors.prompt = "Prompt is required";
    } else {
      console.log(formData);
    }
  };

  return (
    <div className="flex flex-col md:px-10">
      <div className="flex items-center mb-10">
        <div
          className={`h-16 w-16 flex items-center justify-center rounded-md mr-3 text-violet-500 bg-violet-500/10`}>
          {<MessageSquare size={42} />}
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Conversation</h2>
          <p className="mt-1 text-lg">Our most advanced conversation model</p>
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
          placeholder="Explain DevOps to me like I'm 5 years old"
          className="resize-none w-full xl:grow-1 min-h-5 border-0 outline-none focus-visible:ring focus-visible:ring-transparent xl:pr-8 sm:pb-8 xl:pb-0 sm:pr-0 overflow-hidden overflow-y-auto"></textarea>
        {/* {errors.prompt && <p>{errors.prompt}</p>} */}
        <button
          className="w-full xl:w-28 rounded-md py-2 bg-[#121725] text-white font-semibold"
          type="submit">
          Generate
        </button>
      </form>
      <div className="space-y-4 mt-4">Messages Content</div>
    </div>
  );
};

export default Conversation;
