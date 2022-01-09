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
import Series from "./components/Series/Series";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Discover />
      <MonthlyDeals />
      <RecentNews />
      <Series />
      <Instagram />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
