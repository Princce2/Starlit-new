import React from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./about";
import Admission from "./admission";
import Game from "./game";
import Contact from "./contact";
import Gallery from "./gallery";
import Events from "./events";
import "./index.css";
import Auth from "./auth";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MouseFollower from "./components/MouseFollower";

const AOSApp = () => {
  useEffect(() => {
    AOS.init({
      offset: 50, // How far from the element before triggering (in px)
      delay: 100, // Delay before the animation starts (ms)
      duration: 1000, // Animation duration (ms) - smoothness comes from longer duration
      easing: "ease-in-out", // Smooth easing
      once: true, // Only animate once while scrolling down
      mirror: false, // Don't animate while scrolling back up
      anchorPlacement: "top-bottom", // Animation starts when top of element hits bottom of viewport
    });
  }, []);

  return (
    <BrowserRouter>
      <MouseFollower />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AOSApp />
  </React.StrictMode>
);
