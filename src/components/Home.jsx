import { useState, useEffect } from "react";
import bgImage from "../home_assets/43ce3aaf058246c23cc8be771da48566.png";
import second_bg from "../home_assets/2page_bg.png";
import one from "../home_assets/1_icon.png";
import two from "../home_assets/2_icon.png";
import three from "../home_assets/3_icon.png";
import four from "../home_assets/4_icon.png";
import i1 from "../home_assets/HI_1.png";
import i2 from "../home_assets/HI_2.png";
import i3 from "../home_assets/HI_3.png";
import i4 from "../home_assets/HI_4.png";
import i5 from "../home_assets/HI_5.png";
import Footer from "./Footer";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      quote: "Together, we can take change to save people",
      text: "Sollicitudin vitae diam senectus molestie cras in gravida egestas ac. Tortor condirdum elit.",
      name: "Abc XYZ",
      role: "Donor",
      image: "https://via.placeholder.com/500x300",
    },
    {
      quote: "Every donation helps build a better future",
      text: "Etiam viverra mauris nec odio faucibus, nec vestibulum nulla vehicula. Suspendissen.",
      name: "Jane Doe",
      role: "Supporter",
      image: "https://via.placeholder.com/500x300/ccc",
    },
    {
      quote: "Your kindness brings hope to many lives",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fac tristique.",
      name: "John Smith",
      role: "Volunteer",
      image: "https://via.placeholder.com/500x300/aaa",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // 👇 Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div>
      <div
        className="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="pl-4 md:pl-10 lg:pl-[160px] pr-4 text-white ">
          <div className="w-full md:w-1/2 space-y-6">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Give Hope,
              <br />
              Save Lives
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-30">
              Libero mauris sed sed proin. Blandit aliquet ipsum faucibus dictum
              natoque arcu. Potenti ante sed in amet massa aliquet. Enim dui
              urna mauris volutpat Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Animi nesciunt ab nostrum odio est omnis rerum,
              voluptatibus, numquam repudiandae nisi repellat nobis id quos,
              delectus quisquam deserunt harum tempore perspiciatis!
            </p>

            {/* Donation Info */}
            <div className="flex gap-8 flex-wrap pt-2 text-sm md:text-base">
              <div>
                <span className="text-orange-500 font-bold text-xl md:text-2xl">
                  ₹ 1 284 528
                </span>
                <br />
                <span className="text-white text-md">Donation</span>
              </div>
              <div>
                <span className="text-orange-500 font-bold text-xl md:text-2xl">
                  12 460
                </span>
                <br />
                <span className="text-white text-md">People Helped</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  2 page */}
      <div className="w-full bg-white px-4 md:px-8 lg:px-20 py-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
          <img
            src={second_bg}
            alt="Good intentions"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
            Transforming Good Intentions into Good Actions
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur. Amet id in tristique
            bibendum justo netus augue id. Nunc tristique quis leo duis gravida
            volutpat vitae quam quam. Ultrices urna nec massa commodo id sit
            diam amet et. Libero dictum ut purus ut vel sit egestas. Ut ac
            mattis senectus ac suspendisse vitae vel nulla eleifend. Est eros
            facilisi aenean nisl a. Vitae et fusce purus consectetur
          </p>

          {/* Numbered Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { number: 1, text: "Choose your cause" },
              { number: 2, text: "Register on our website" },
              { number: 3, text: "Donate the amount you like" },
              { number: 4, text: "Stay tuned about cause" },
            ].map((item) => (
              <div key={item.number} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white font-bold flex items-center justify-center rounded-full">
                  {item.number}
                </div>
                <p className="text-sm md:text-base font-semibold text-gray-800">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3 page */}
      {/* Features Section */}
      <div className="bg-[#F8F9FA] py-12 px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <img
              src={one}
              alt="Disaster Management"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold text-black">
                Disaster Management
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Fermentum nisl accumsan nisi sapien in vitae
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <img
              src={two}
              alt="Food for Stranded"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold text-black">
                Food for Stranded
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Ultricies lacus turpis proin tempor faucibus
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <img
              src={three}
              alt="Health Care"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold text-black">Health Care</h3>
              <p className="text-sm text-gray-600 mt-1">
                Adipiscing in vitae necposue eget fringilla a morbi
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <img
              src={four}
              alt="Local communities"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold text-black">
                Local communities
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Nunc tristique quis leo duis gravida volutpat vitae
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 page */}

      <div className="bg-white px-6 py-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold mb-4 sm:mb-0">Latest Causes</h2>
          <button className="border border-black text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
            MORE CAUSES
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow p-4 max-w-sm w-full mx-auto">
            <img
              src={bgImage}
              alt="Gather Food"
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gather Food</h3>
            <p className="text-sm text-gray-600 mb-4">
              Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor
              odio a. Curabitur porttitor quis gravida porttitor vel...
            </p>
            <div className="w-full bg-gray-200 h-2 rounded mb-2">
              <div
                className="bg-orange-500 h-2 rounded"
                style={{ width: "66%" }}
              ></div>
            </div>
            <div className="flex justify-between text-sm font-medium mb-1">
              <p>Goal: ₹12000</p>
              <p>14 donations</p>
            </div>
            <p className="text-sm text-gray-600 mb-4">Raised: ₹8000</p>
            <button className="w-full bg-black text-white font-semibold py-2 rounded hover:opacity-90">
              VIEW DETAILS
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow p-4 max-w-sm w-full mx-auto">
            <img
              src={bgImage}
              alt="Improve Connectivity"
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Improve Connectivity</h3>
            <p className="text-sm text-gray-600 mb-4">
              Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor
              odio a. Curabitur porttitor quis gravida porttitor vel...
            </p>
            <div className="w-full bg-gray-200 h-2 rounded mb-2">
              <div
                className="bg-orange-500 h-2 rounded"
                style={{ width: "80%" }}
              ></div>
            </div>
            <div className="flex justify-between text-sm font-medium mb-1">
              <p>Goal: ₹15000</p>
              <p>25 donations</p>
            </div>
            <p className="text-sm text-gray-600 mb-4">Raised: ₹12000</p>
            <button className="w-full bg-black text-white font-semibold py-2 rounded hover:opacity-90">
              VIEW DETAILS
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow p-4 max-w-sm w-full mx-auto">
            <img
              src={bgImage}
              alt="Gather Equipment"
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gather Equipment</h3>
            <p className="text-sm text-gray-600 mb-4">
              Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor
              odio a. Curabitur porttitor quis gravida porttitor vel...
            </p>
            <div className="w-full bg-gray-200 h-2 rounded mb-2">
              <div
                className="bg-orange-500 h-2 rounded"
                style={{ width: "40%" }}
              ></div>
            </div>
            <div className="flex justify-between text-sm font-medium mb-1">
              <p>Goal: ₹20000</p>
              <p>6 donations</p>
            </div>
            <p className="text-sm text-gray-600 mb-4">Raised: ₹8000</p>
            <button className="w-full bg-black text-white font-semibold py-2 rounded hover:opacity-90">
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>

      {/* page 5 */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={bgImage}
            alt="Gallery 1"
            className="rounded-2xl w-full h-64 object-cover"
          />
          <img
            src={bgImage}
            alt="Gallery 2"
            className="rounded-2xl w-full h-64 object-cover"
          />
          <img
            src={bgImage}
            alt="Gallery 3"
            className="rounded-2xl w-full h-64 object-cover"
          />
          <img
            src={bgImage}
            alt="Gallery 4"
            className="rounded-2xl w-full h-64 object-cover"
          />
          <img
            src={bgImage}
            alt="Gallery 5"
            className="rounded-2xl w-full h-64 object-cover"
          />
          <img
            src={bgImage}
            alt="Gallery 6"
            className="rounded-2xl w-full h-64 object-cover"
          />
        </div>
      </div>

      {/* page 6 */}
      <div className="bg-white py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/*  1 */}
          <div>
            <img
              src="https://img.icons8.com/ios-filled/50/fa6400/rocket--v1.png"
              alt="Projects Completed"
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">1.2k+</h3>
            <p className="text-gray-600 text-lg">Projects Completed</p>
          </div>

          {/* 2 */}
          <div>
            <img
              src="https://img.icons8.com/ios-filled/50/fa6400/charity.png"
              alt="Monthly Donate"
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">100</h3>
            <p className="text-gray-600 text-lg">Monthly Donate</p>
          </div>

          {/* 3 */}
          <div>
            <img
              src="https://img.icons8.com/ios-filled/50/fa6400/geography.png"
              alt="Partners Worldwide"
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">480</h3>
            <p className="text-gray-600 text-lg">Partners Worldwide</p>
          </div>

          {/* 4 */}
          <div>
            <img
              src="https://img.icons8.com/ios-filled/50/fa6400/gift--v1.png"
              alt="Donations Received"
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">0.4m</h3>
            <p className="text-gray-600 text-lg">Donations Received</p>
          </div>
        </div>
      </div>

      {/* page 7 */}
      <div className="bg-cyan-50 py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${slides.length * 100}%`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col md:flex-row items-center justify-between gap-10 px-2 sm:px-6"
                >
                  {/* Left Text Section */}
                  <div className="md:w-1/2 text-center md:text-left">
                    <div className="text-orange-500 text-5xl mb-4 leading-none">
                      “
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                      {slide.quote}
                    </h2>
                    <p className="text-gray-600 mb-4 text-base sm:text-lg">
                      {slide.text}
                    </p>
                    <p className="font-bold text-lg">{slide.name}</p>
                    <p className="text-sm text-gray-600">{slide.role}</p>
                  </div>

                  {/* Right Image Section */}
                  <div className="md:w-1/2 w-full">
                    <div className="relative w-full h-64 sm:h-80 md:h-[26rem] rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={bgImage}
                        className="w-full h-full object-cover object-center"
                        alt="Slide visual"
                      />
                      <button className="absolute inset-0 flex justify-center items-center">
                        <div className="bg-orange-500 text-white p-4 rounded-full shadow-xl hover:scale-105 transition">
                          ▶
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${
                    currentSlide === index
                      ? "bg-orange-500 scale-125"
                      : "bg-gray-300"
                  }`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* page 8 */}
      <div className="bg-white px-4 sm:px-6 lg:px-16 py-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold mb-4 sm:mb-0">
            Latest News and Blog
          </h2>
          <button className="border border-black text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
            MORE NEWS
          </button>
        </div>

        {/* Blog Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow overflow-hidden flex flex-col max-w-sm w-full mx-auto">
            <img
              src={bgImage}
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-full">
              <p className="text-sm text-gray-500 mb-1">📅 June 20, 2024</p>
              <h3 className="text-lg font-bold mb-2">Where to Give Now</h3>
              <p className="text-sm text-gray-600 mb-4">
                Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel
                auctor odio a...
              </p>
              <div className="mt-auto font-semibold text-sm text-black flex items-center gap-1 hover:text-orange-500 cursor-pointer">
                READ MORE <span>➔</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow overflow-hidden flex flex-col max-w-sm w-full mx-auto">
            <img
              src={bgImage}
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-full">
              <p className="text-sm text-gray-500 mb-1">📅 June 22, 2024</p>
              <h3 className="text-lg font-bold mb-2">Popular Charities</h3>
              <p className="text-sm text-gray-600 mb-4">
                Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel
                auctor odio a...
              </p>
              <div className="mt-auto font-semibold text-sm text-black flex items-center gap-1 hover:text-orange-500 cursor-pointer">
                READ MORE <span>➔</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow overflow-hidden flex flex-col max-w-sm w-full mx-auto">
            <img
              src={bgImage}
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-full">
              <p className="text-sm text-gray-500 mb-1">📅 June 24, 2024</p>
              <h3 className="text-lg font-bold mb-2">Childcare Crisis</h3>
              <p className="text-sm text-gray-600 mb-4">
                Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel
                auctor odio a...
              </p>
              <div className="mt-auto font-semibold text-sm text-black flex items-center gap-1 hover:text-orange-500 cursor-pointer">
                READ MORE <span>➔</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page 9 */}
      <div className="bg-white py-10">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-y-6">
            <img
              src={i1}
              alt="Icon 1"
              className="w-[70px] sm:w-[80px] md:w-[90px] h-auto"
            />
            <img
              src={i2}
              alt="Icon 2"
              className="w-[70px] sm:w-[80px] md:w-[90px] h-auto"
            />
            <img
              src={i3}
              alt="Icon 3"
              className="w-[70px] sm:w-[80px] md:w-[90px] h-auto"
            />
            <img
              src={i4}
              alt="Icon 4"
              className="w-[70px] sm:w-[80px] md:w-[90px] h-auto"
            />
            <img
              src={i5}
              alt="Icon 5"
              className="w-[70px] sm:w-[80px] md:w-[90px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />

      {/* last div */}
    </div>
  );
};

export default Home;
