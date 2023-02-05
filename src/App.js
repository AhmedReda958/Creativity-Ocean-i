import Header from "components/Header";
import Advantages from "components/Advantages";
import Hero from "components/Hero";
import Mission from "components/MIssion";
import Services from "components/Services";
import "./style/app.scss";
import About from "components/About";
import Location from "components/location";
import Partners from "components/Partners";
import ServicesSlider from "components/ServicesSlider";
import ReachUs from "components/ReachUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Location />
      <Services />
      <ServicesSlider />
      <Advantages />
      <Mission />
      <Partners />
      <ReachUs />
    </div>
  );
}

export default App;
