
import AboutUs from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/NavBar";
import ServicePage from "./Pages/ServicePage";
import Zoom from "./components/zoom/ZoomParalex";
import AnimatedImage from "./components/image";
import image from "./assets/images/image1.png";
import Cursor from "./components/cursor/Cursor";
import FeaturesPage from "./Pages/Features";

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-200 via-white to-cyan-200 font-primary">
        <Cursor />
        <Zoom />
        <Navbar />
        <Hero />
        <AnimatedImage
          src={image}
          alt="image"
          className="saturate-0 hover:saturate-150"
        />
        <ServicePage />
        <Footer />
        <Contact />
        <FeaturesPage />
        <AboutUs />
      </div>
    </>
  )
}

export default App