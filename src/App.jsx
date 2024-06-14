import "./App.css";
import Designs from "./components/Designs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Designs />
    </>
  );
}

export default App;
