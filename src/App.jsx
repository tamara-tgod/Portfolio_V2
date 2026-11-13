import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import CVPage from "./pages/CVPage";

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  );
}

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/cv" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </>
  );
}



function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}


export default App;
