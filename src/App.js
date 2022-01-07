import "./Style.css";
import Navbar from "../src/components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Discover from "./components/Discover/Discover";
import MonthlyDeals from "./components/Monthly-deals/MonthlyDeals";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Landing /> */}
      {/* <Discover /> */}
      <MonthlyDeals />
    </div>
  );
}

export default App;
