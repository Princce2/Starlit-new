import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cultural1 from "./images/Cultural1.jpg";
import Cultural2 from "./images/Cultural2.jpg";
import Cultural3 from "./images/Cultural3.jpg";
import _MG_7736 from "./images/_MG_7736.jpg";

const Events = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-[url('./images/_MG_7736.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            EVENTS
          </h1>
          <p
            className="text-sm sm:text-base text-gray-200 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            / Events
          </p>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mt-4 text-gray-200"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Discover the exciting events happening at Starlit Academy!
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent text-center mb-12"
            data-aos="fade-up"
          >
            Upcoming Events
          </h2>
          <p
            className="text-base sm:text-lg text-gray-200 text-center mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Stay tuned for our vibrant and engaging events at Starlit Academy!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Annual Cultural Festival",
                description:
                  "Join us for a celebration of diverse cultures through performances, art, and food.",
                date: "January 15, 2025",
                time: "10:00 AM - 3:00 PM",
                image: Cultural1,
              },
              {
                title: "Science Fair",
                description:
                  "Students showcase innovative projects and experiments in our annual science fair.",
                date: "February 10, 2025",
                time: "9:00 AM - 12:00 PM",
                image: Cultural2,
              },
              {
                title: "Sports Day",
                description:
                  "A fun-filled day of athletic competitions and team-building activities.",
                date: "March 5, 2025",
                time: "8:00 AM - 2:00 PM",
                image: Cultural3,
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">
                    {event.description}
                  </p>
                  <p className="text-sm text-gray-400">Date: {event.date}</p>
                  <p className="text-sm text-gray-400">Time: {event.time}</p>
                </div>
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
            Be Part of Our Community
          </h2>
          <p
            className="text-base sm:text-lg text-gray-200 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join Starlit Academy and participate in our enriching events and
            activities.
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

export default Events;
