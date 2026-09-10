import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Exercises from "./pages/Exercises";
import ProgramDetails from "./pages/ProgramDetails";
import ExerciseDetail from "./pages/ExerciseDetail";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetails />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
