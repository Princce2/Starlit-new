import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cultural1 from "./images/Cultural1.jpg";
import Cultural2 from "./images/Cultural2.jpg";
import Cultural3 from "./images/Cultural3.jpg";
import Cultural5 from "./images/Cultural5.jpg";
import Cultural6 from "./images/Cultural6.jpg";
import Musics from "./images/musics.jpeg";
import _MG_7736 from "./images/_MG_7736.jpg";
import Danceclub from "./images/danceclub.jpeg";
import Discovery from "./images/discovery.jpeg";
import Drumclub from "./images/drumclub.jpeg";
import _MG_7230 from "./images/_MG_7230.jpg";
import _MG_7668 from "./images/_MG_7668.jpg";
import _MG_7392 from "./images/_MG_7392.jpg";

const Gallery = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-[url('./images/_MG_7668.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            GALLERY
          </h1>
          <p
            className="text-sm sm:text-base text-gray-200 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            / Gallery
          </p>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mt-4 text-gray-200"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Explore our gallery to see the vibrant life at Starlit Academy.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent text-center mb-12"
            data-aos="fade-up"
          >
            Moments at Starlit Academy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: Cultural2, alt: "Cultural Event" },
              { src: Cultural3, alt: "Cultural Celebration" },
              { src: Cultural5, alt: "School Activity" },
              { src: Musics, alt: "Music Club" },
              { src: _MG_7736, alt: "School Event" },
              { src: Danceclub, alt: "Dance Club" },
              { src: Discovery, alt: "Discovery Club" },
              { src: Drumclub, alt: "Drum Club" },
              { src: _MG_7230, alt: "Campus Life" },
              { src: _MG_7668, alt: "Student Activity" },
              { src: _MG_7392, alt: "School Gathering" },
              { src: Cultural6, alt: "Cultural Performance" },
            ].map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg group"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#2F2E8C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent mb-4"
            data-aos="fade-up"
          >
            Join Our Vibrant Community
          </h2>
          <p
            className="text-base sm:text-lg text-gray-200 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover the enriching experiences awaiting your child at Starlit
            Academy.
          </p>
          <Link
            to="/admission"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-base hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
