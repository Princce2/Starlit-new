import React, { useEffect } from "react"; // ✅ useEffect included
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Game = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 100,
      duration: 600,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">Welcome</h1>
      <p data-aos="zoom-in">Scroll down to see more</p>
    </div>
  );
};

export default Game;
