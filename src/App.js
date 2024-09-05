import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import Footer from "./components/Footer/Footer";
import Galary from "./components/Galary/Galary";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Galary/>
      <Appointment/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
