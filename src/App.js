import "./Style.css";
import "./Responsive.css"
import Navbar from "../src/components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Discover from "./components/Discover/Discover";
import MonthlyDeals from "./components/Monthly-deals/MonthlyDeals";
import RecentNews from "./components/Recent-news/RecentNews";
import Instagram from "./components/Instagram/Instagram";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Discover />
      <MonthlyDeals />
      <RecentNews />
      <Instagram />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
