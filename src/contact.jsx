import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import _MG_7668 from "./images/_MG_7668.jpg";

const Contact = () => {
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
            CONTACT US
          </h1>
          <p
            className="text-sm sm:text-base text-gray-200 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            / Contact
          </p>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mt-4 text-gray-200"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Get in touch with Starlit Academy to learn more about our programs
            and how we can support your child's growth.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent text-center mb-12"
            data-aos="fade-up"
          >
            Reach Out to Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className="bg-gray-800 rounded-xl shadow-lg p-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-6">
                Send Us a Message
              </h3>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-cyan-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-cyan-300"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-cyan-300"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-base hover:scale-105 transition-transform duration-300">
                  Send Message
                </button>
              </div>
            </div>

            {/* Map */}
            <div
              className="rounded-xl overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <iframe
                title="Starlit Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5196332268324!2d6.712015974326359!3d6.1949579268954365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043ed3cd2e4f647%3A0xe0b9b8c056851a48!2sStarlit%20Academy!5e0!3m2!1sen!2sng!4v1750167968216!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
            Ready to start your child's journey with Starlit Academy? Apply
            today!
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

export default Contact;
