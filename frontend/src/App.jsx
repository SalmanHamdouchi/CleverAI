import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Conversation from "./components/Conversation";
import VideoGeneration from "./components/VideoGeneration";
import ImageGeneration from "./components/ImageGeneration";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/video-generation" element={<VideoGeneration />} />
        <Route path="/image-generation" element={<ImageGeneration />} />
      </Routes>
    </Layout>
  );
}

export default App;
