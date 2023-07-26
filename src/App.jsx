import "./App.css";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <div className="main-content">
        <NavBar></NavBar>
      </div>
    </div>
  );
}

export default App;
library.add(fas, far);
