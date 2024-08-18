import "./App.css";
import Aboutus from "./components/Aboutus";
import Designs from "./components/Designs";
import Footer from "./components/Footer";
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
      <Aboutus />
      <Footer />
    </>
  );
}

export default App;
