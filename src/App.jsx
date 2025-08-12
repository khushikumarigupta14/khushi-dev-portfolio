import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EducationCertificatesAchievements from "./components/EducationCertificatesAchievements";
import Resume from "./components/Resume";
// Add near the top of your App.jsx
// import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        {/* <Resume/> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <About />
          <Projects />
          <EducationCertificatesAchievements />
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
