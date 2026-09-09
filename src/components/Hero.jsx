import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80",
    smallTitle: "WELCOME TO FITZONE",
    title: "BUILD YOUR",
    highlight: "STRONGEST",
    lastTitle: "VERSION.",
    description:
      "Push your limits, build your strength and transform your body with our expert trainers and world-class facilities.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2000&q=80",
    smallTitle: "TRAIN HARD. STAY STRONG.",
    title: "YOUR BODY",
    highlight: "YOUR POWER",
    lastTitle: "YOUR JOURNEY.",
    description:
      "Get stronger every day with personalized workout programs designed to help you reach your fitness goals.",
  },
];

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-screen w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-black/65"></div>

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>


              {/* Content */}

              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10 lg:px-16">

                <div className="max-w-3xl pt-16">

                  {/* Small Heading */}

                  <p className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[4px] text-[#9AF358] md:text-base">

                    <span className="h-[2px] w-10 bg-[#9AF358]"></span>

                    {slide.smallTitle}

                  </p>


                  {/* Main Heading */}

                  <h1 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-6xl">

                    {slide.title}

                    <br />

                    <span className="text-[#9AF358]">
                      {slide.highlight}
                    </span>

                    <br />

                    {slide.lastTitle}

                  </h1>


                  {/* Description */}

                  <p className="mt-7 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
                    {slide.description}
                  </p>


                  {/* Buttons */}

                  <div className="mt-9 flex flex-wrap gap-4">

                    <Link
                      to="/contact"
                      className="group flex items-center gap-3 rounded-full bg-[#9AF358] px-7 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(154,243,88,0.35)]"
                    >

                      Join Now

                      <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>

                    </Link>


                    <Link
                      to="/programs"
                      className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-[#9AF358] hover:bg-[#9AF358] hover:text-black"
                    >

                      Explore Programs

                    </Link>

                  </div>

                </div>

              </div>


              {/* Bottom Stats */}

              <div className="absolute bottom-8 right-6 z-10 hidden gap-10 md:flex lg:right-16">

                <div>
                  <h3 className="text-2xl font-bold text-[#9AF358]">
                    10+
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Years Experience
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#9AF358]">
                    5K+
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Happy Members
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#9AF358]">
                    20+
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Expert Trainers
                  </p>
                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Hero;