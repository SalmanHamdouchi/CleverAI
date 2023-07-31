import React from "react";
import { Link } from "react-router-dom";
import {
  ImageIcon,
  MessageSquare,
  VideoIcon,
  Music,
  Code,
  ArrowRight,
} from "lucide-react";

const Dashboard = () => {
  let tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      href: "/conversation",
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: "Music Generation",
      icon: Music,
      href: "/music",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: "/image",
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: "/video",
    },
    {
      label: "Code Generation",
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: "/code",
    },
  ];
  return (
    <div className="dashboard">
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="font-light text-sm md:text-lg text-center">
          Use AI features, all in one place
        </p>
        <div className="px-4 md:px-20 lg:px-32 sâce-y-4"></div>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border-2 border-black/5 flex items-center justify-between hover:shadow-[0px_2px_3px_0px_#71717112] transition cursor-pointer">
            <Link to={item.href}>
              <div className={`flex items-center p-2 rounded-lg`}>
                <div
                  className={`h-10 w-10 flex items-center justify-center rounded-md ${item.bgColor} ${item.color}`}>
                  {<item.icon size={30} />}
                </div>
                <div className={`ml-4 font-semibold `}>{item.label}</div>
              </div>
            </Link>
            <ArrowRight className="w-5 h-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;