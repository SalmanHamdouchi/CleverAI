import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllImages,
  generateImageThunk,
  selectLoading,
} from "../features/image/image-slice";

import toast, { Toaster } from "react-hot-toast";
import { Image, Download } from "lucide-react";
import Empty from "./Empty";
import Loader from "./Loader";

const ImageGeneration = () => {
  let dispatch = useDispatch();
  let images = useSelector(selectAllImages);
  let isLoading = useSelector(selectLoading);
  const [formData, setFormData] = useState({
    prompt: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      amount: 1,
      resolution: "512x512",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.prompt || !formData.prompt.trim()) {
      toast.error("Please fill in the prompt!");
      return;
    }

    dispatch(generateImageThunk(formData.prompt)).then((data) => {
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
          className={`h-16 w-16 flex items-center justify-center rounded-md mr-3 text-pink-700 bg-pink-700/10`}>
          {<Image size={42} />}
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Image Generation</h2>
          <p className="mt-1 text-lg">
            Unlock the Artistic Potential of AI Image Creation
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
          className="resize-none w-full xl:grow-1 min-h-5 border-0 outline-none focus-visible:ring focus-visible:ring-transparent xl:pr-8 sm:pb-8 xl:pb-0 sm:pr-0 overflow-hidden overflow-y-auto"></textarea>
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
        {images.length === 0 && !isLoading && (
          <Empty label="No images generated!" />
        )}

        {images.map((image, index) => (
          <div
            key={index}
            className="w-fit ring-2 ring-inset ring-slate-300 flex flex-col justify-center rounded-lg">
            <div className="overflow-hidden">
              <img className="object-fill" src={image.url} alt="img" />
            </div>
            <div className="cursor-pointer mt-2 mb-2 py-2 flex justify-center items-center bg-[#EFF3F8] mx-2 rounded-lg">
              <Download className="h-5 w-5 mr-2"></Download>
              <button className="text-[1.25rem] font-semibold">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGeneration;
