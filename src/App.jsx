import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Conversation from "./components/Conversation";
import VideoGeneration from "./components/VideoGeneration";
import ImageGeneration from "./components/ImageGeneration";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={Dashboard} />
        <Route path="/conversation" element={Conversation} />
        <Route path="/video-generation" element={VideoGeneration} />
        <Route path="/image-generation" element={ImageGeneration} />
      </Routes>
    </Layout>
  );
}

export default App;
library.add(fas, far);
