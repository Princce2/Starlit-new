import React from "react";
import { Link } from "react-router-dom";
import Cultural1 from "./images/cultural1.jpg";
import Cultural2 from "./images/cultural2.jpg";
import Cultural3 from "./images/cultural3.jpg";
import Cultural6 from "./images/cultural6.jpg";
import Musics from "./images/musics.jpeg";
import _MG_7736 from "./images/_MG_7736.jpg";
import Danceclub from "./images/danceclub.jpeg";
import Discovery from "./images/discovery.jpeg";
import Drumclub from "./images/drumclub.jpeg";
import _MG_7230 from "./images/_MG_7230.jpg";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen bg-[url('./images/_MG_7668.jpg')] bg-cover bg-top bg-no-repeat flex items-center justify-center"
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1
            className="text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            WELCOME TO OUR OFFICIAL WEBSITE
          </h1>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            STARLIT ACADEMY
          </h2>
          <h3
            className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent mt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Your Home Away From Home
          </h3>
          <p
            className="text-sm sm:text-base max-w-2xl mx-auto mt-4 text-gray-200"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Thank you for visiting! We are delighted that you are interested in
            our school and enrolling your child.
          </p>
          <div
            className="mt-8 flex justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Link
              to="/admission"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-base hover:scale-105 transition-transform duration-300"
            >
              Apply for Admission
            </Link>
            <Link
              to="/parent-login"
              className="bg-transparent border-2 border-cyan-300 text-cyan-300 px-6 py-2 rounded-lg font-semibold text-base hover:bg-cyan-300 hover:text-white transition-all duration-300"
            >
              Parent Login
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[url('./images/Cultural5.jpg')] bg-cover bg-center bg-no-repeat py-16 relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-gray-900/90 p-8 rounded-xl max-w-3xl mx-auto text-gray-200 text-justify"
            data-aos="fade-up"
          >
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent mb-6 text-center">
              About Starlit Academy
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              Starlit Academy is a Home Away From Home, dedicated to nurturing
              the total child’s educational, psychological, and spiritual needs.
              Our focus is on the gradual development of each child into a
              well-rounded individual.
            </p>
            <p className="mb-4 text-sm sm:text-base">
              We strive to make children’s education qualitative, considering
              the social and economic pressures on parents. By raising the
              quality of education in our community, we aim to instill proper
              values in children before the critical ages of three to eight,
              fostering a better society.
            </p>
            <p className="mb-4 text-sm sm:text-base">
              Our conducive, home-friendly environment supports holistic
              development, with high-tech facilities and qualified, dedicated
              staff. We emphasize the role of spirituality in value-building and
              invite you to partner with us in shaping your child’s future.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Values Section */}
      <section className="py-16 bg-[#2F2E8C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 relative" data-aos="fade-right">
            <img
              src={Cultural1}
              alt="Starlit Academy"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div
              className="absolute bottom-4 left-4 bg-gray-900/90 p-4 rounded-lg text-gray-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent">
                OUR VISION:
              </h3>
              <p className="text-sm sm:text-base">To Build a Total Child</p>
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent mt-2">
                MOTTO:
              </h3>
              <p className="text-sm sm:text-base">Godliness and Excellence</p>
            </div>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              At Starlit Academy, We:
            </h2>
            <ul className="list-disc list-outside pl-6 space-y-3 text-gray-300 text-sm sm:text-base">
              <li>
                Respect each child for who they are, fostering an environment
                where every child feels valued.
              </li>
              <li>
                Encourage individual initiatives and develop each child’s
                interests and talents to their fullest potential.
              </li>
              <li>
                Promote independence, self-respect, and respect for others,
                building self-confidence.
              </li>
              <li>
                Unite children from diverse backgrounds to develop social skills
                and ethical standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Schools Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent mb-12"
            data-aos="fade-up"
          >
            Our Schools
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary School */}
            <div
              className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={_MG_7736}
                alt="Primary School"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2">
                Primary School
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Starlit Primary School provides high-quality preschool and
                primary education in a nurturing and inspiring environment,
                fostering foundational growth.
              </p>
            </div>
            {/* Secondary School */}
            <div
              className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={_MG_7736}
                alt="Secondary School"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2">
                Secondary School
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Starlit Secondary School offers a comprehensive curriculum with
                modern teaching practices, preparing students for higher
                education and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#2F2E8C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <h2
              className="text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent"
              data-aos="fade-up"
            >
              GET STARTED WITH US TODAY
            </h2>
            <h1
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent mt-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Kickstart Your Child’s Future
            </h1>
          </div>
          <div className="space-y-4" data-aos="fade-left">
            <div className="flex flex-col sm:flex-row items-center bg-gray-900/90 rounded-xl overflow-hidden">
              <div className="p-6 flex-1">
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent">
                  Apply Now
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mt-2">
                  Admissions are ongoing for all programs. Click below to start
                  your application today.
                </p>
                <Link
                  to="/admission"
                  className="mt-4 inline-block bg-cyan-300 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-cyan-400 transition-colors duration-300"
                >
                  Start Application
                </Link>
              </div>
              <img
                src={Cultural2}
                alt="Admission"
                className="w-full sm:w-48 h-48 object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center bg-gray-900/90 rounded-xl overflow-hidden">
              <img
                src={Cultural3}
                alt="Admission"
                className="w-full sm:w-48 h-48 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent">
                  Apply Now
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mt-2">
                  Join our vibrant community. Submit your application now for a
                  seamless admission process.
                </p>
                <Link
                  to="/admission"
                  className="mt-4 inline-block bg-cyan-300 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-cyan-400 transition-colors duration-300"
                >
                  Start Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Extracurricular Activities
          </h2>
          <h3
            className="text-base sm:text-lg text-gray-300 mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Focused on Holistic Formation
          </h3>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={Musics}
              alt="Music Club"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src={Discovery}
              alt="Discovery Club"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src={Danceclub}
              alt="Dance Club"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={Cultural6}
              alt="Cultural Event"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src={Drumclub}
              alt="Drum Club"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="relative h-screen bg-[url('./images/_MG_7230.jpg')] bg-fixed bg-cover bg-center bg-no-repeat flex items-center justify-center"
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent mb-6"
            data-aos="fade-up"
          >
            Our Mission is to Add Value to Every Child
          </h1>
          <p
            className="text-base sm:text-lg text-gray-200 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We provide an enriching and challenging environment to foster
            holistic growth and development.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-base hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
