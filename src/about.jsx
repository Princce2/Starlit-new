import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cultural1 from "./images/cultural1.jpg";
import Cultural5 from "./images/cultural5.jpg";
import _MG_7250 from "./images/_MG_7250.jpg";
import _MG_7230 from "./images/_MG_7230.jpg";

const About = () => {
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
            ABOUT
          </h1>
          <p
            className="text-sm sm:text-base text-gray-200 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            / About
          </p>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mt-4 text-gray-200"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Discover the heart of Starlit Academy, where we nurture every
            child's potential in a vibrant, home-like environment.
          </p>
        </div>
      </section>

      {/* About Starlit Academy Section */}
      <section className="bg-[url('./images/cultural5.jpg')] bg-cover bg-center bg-no-repeat py-16 relative">
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
          <div className="w-full md:w-1/2 text-white" data-aos="fade-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
              At Starlit Academy, We:
            </h2>
            <ul className="list-disc list-outside pl-6 space-y-3 text-gray-300 text-sm sm:text-base">
              <li>
                Respect each child for who they are, fostering an environment
                where each child feels valued.
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

      {/* Child Gains and Core Values Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-stretch">
          <div
            className="w-full md:w-1/2 text-white p-6 flex flex-col justify-between"
            data-aos="fade-up"
          >
            <div className="divide-y divide-blue-800 flex-grow">
              <div className="pb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  What Would Your Child Gain from Starlit Academy?
                </h2>
                <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base text-gray-300">
                  <li>
                    Exposure to a unique blend of international Montessori,
                    British, and Nigerian curricula, setting them ahead of
                    peers.
                  </li>
                  <li>
                    A warm, bright, and beautiful learning environment that
                    excites and sustains a love for learning.
                  </li>
                  <li>
                    Personalized attention in manageable class sizes, ensuring
                    your child is never overlooked.
                  </li>
                  <li>
                    Hands-on learning through investigation and research with
                    modern books and educational materials.
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Our Core Values
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-300">
                  <li>Godliness</li>
                  <li>Diligence</li>
                  <li>Industriousness</li>
                  <li>Responsibility</li>
                  <li>Trustworthiness</li>
                  <li>Discipline</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-1/2 flex items-stretch"
            data-aos="fade-left"
          >
            <img
              src={_MG_7250}
              alt="Starlit Academy Environment"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Montessori Characteristics Section */}
      <section className="py-16 bg-[#2F2E8C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent mb-6"
            data-aos="fade-up"
          >
            Authentic Montessori Characteristics
          </h2>
          <ul
            className="list-disc pl-5 space-y-3 text-sm sm:text-base text-gray-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li>
              <strong>Child-Centered Environment:</strong> Our focus is on
              children learning within small groups.
            </li>
            <li>
              <strong>Individual Progress:</strong> Each child is unique and
              progresses at their own pace.
            </li>
            <li>
              <strong>Spontaneous Activity:</strong> Children move freely and
              explore within defined limits.
            </li>
            <li>
              <strong>Active Learning:</strong> Curriculum tailored to academic
              subjects and long-term projects that interest the child.
            </li>
            <li>
              <strong>Self-Directed Activity:</strong> Encouraging independence
              and decision-making to foster self-direction.
            </li>
            <li>
              <strong>Responsive Environment:</strong> Small desks, chairs, and
              materials tailored to children’s abilities, updated regularly.
            </li>
            <li>
              <strong>Hands-On Learning:</strong> Real, tangible objects help
              children grasp abstract concepts.
            </li>
            <li>
              <strong>Intrinsic Motivation:</strong> Visually stimulating
              environments and engaging activities foster a love for learning.
            </li>
          </ul>
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
};

export default About;
