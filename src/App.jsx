import "./App.css";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";

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
