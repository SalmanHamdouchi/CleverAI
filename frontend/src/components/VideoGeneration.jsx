import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import toast, { Toaster } from "react-hot-toast";
import { Video, Download } from "lucide-react";
import Empty from "./Empty";
import Loader from "./Loader";
import {
  generateVideoThunk,
  selectAllVideos,
  selectLoading,
} from "../features/video/video-slice";

const ImageGeneration = () => {
  let dispatch = useDispatch();
  let videos = useSelector(selectAllVideos);
  let isLoading = useSelector(selectLoading);

  const [formData, setFormData] = useState({
    prompt: "",
  });

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData({
      prompt: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.prompt || !formData.prompt.trim()) {
      toast.error("Please fill in the prompt!");
      return;
    }

    dispatch(generateVideoThunk(formData.prompt)).then((data) => {
      console.log(data);
      if (data.error) {
        toast.error("Something went wrong, please try again!");
      }
    });
  };

  return (
    <div className="flex flex-col md:px-10">
      <Toaster />
      <div className="flex items-center mb-10">
        <div
          className={`h-16 w-16 flex items-center justify-center rounded-md mr-3 text-orange-700 bg-orange-700/10`}>
          {<Video size={42} />}
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Video Generation</h2>
          <p className="mt-1 text-lg">
            Unlock the Artistic Potential of AI Video Creation
          </p>
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
          placeholder="A shiba inu dog on the moon's surface..."
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
            <Loader information="Please note that it may take a bit long." />
          </div>
        )}
        {videos.length === 0 && !isLoading && (
          <Empty label="No video generated!" />
        )}

        {videos.map((video, index) => (
          <div key={index} className="w-full rounded-lg">
            <video className="w-full rounded-lg border" alt="video" controls>
              <source src={video.url}></source>
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGeneration;
