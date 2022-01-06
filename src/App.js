import "./Style.css";
import Navbar from "../src/components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
