import React from "react";

import { Quote, Star } from "lucide-react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Weight Loss Member",
    image:
      "src/assets/images/testimonials/1.webp",
    rating: 5,
    message:
      "FitZone completely changed the way I approach fitness. The trainers are supportive, the environment is amazing and I have finally started seeing real results.",
  },

  {
    id: 2,
    name: "Arjun Mehta",
    role: "Muscle Building Member",
    image:
      "src/assets/images/testimonials/2.webp",
    rating: 5,
    message:
      "The trainers actually understand your goals and help you train accordingly. I have gained strength, confidence and consistency since joining FitZone.",
  },

  {
    id: 3,
    name: "Priya Singh",
    role: "Fitness Member",
    image:
      "src/assets/images/testimonials/3.webp",
    rating: 5,
    message:
      "I was nervous about joining a gym, but everyone here made me feel comfortable. The atmosphere is motivating and the workouts are never boring.",
  },

  {
    id: 4,
    name: "Aman Verma",
    role: "Strength Training Member",
    image:
      "src/assets/images/testimonials/4.webp",
    rating: 5,
    message:
      "The equipment is excellent and the trainers are always ready to help. FitZone has helped me become much stronger and more disciplined.",
  },

  {
    id: 5,
    name: "Neha Kapoor",
    role: "Fitness Member",
    image:
      "src/assets/images/testimonials/5.webp",
    rating: 5,
    message:
      "What I love most about FitZone is the community. Everyone is focused on improving themselves and that keeps me motivated every single day.",
  },
];

const Testimonials = () => {
  return (
    <section className="overflow-hidden bg-[#050807] px-6 py-20 md:px-10 lg:px-16 lg:py-28">

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div data-aos="fade-down">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Testimonials
              </p>

            </div>

            <h2 className="text-4xl font-black uppercase leading-[1] sm:text-5xl md:text-6xl">

              WHAT OUR
              <br />

              <span className="text-[#9AF358]">
                MEMBERS SAY.
              </span>

            </h2>

          </div>


          <p className="max-w-md text-sm leading-7 text-gray-500 md:text-right" data-aos="fade-up">
            Real stories from people who decided to stop making excuses,
            start training and become stronger every day.
          </p>

        </div>


        {/* ================= SLIDER ================= */}

        <div className="mt-12" data-aos="fade-up" data-aos-delay="150">

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper !pb-14"
          >

            {testimonials.map((testimonial) => (

              <SwiperSlide key={testimonial.id}>

                {/* ================= CARD ================= */}

                <div className="group h-full min-h-[360px] rounded-2xl border border-white/10 bg-[#080d0b] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#9AF358]/40">

                  {/* TOP */}

                  <div className="flex items-start justify-between">

                    <div className="flex gap-4">

                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      />

                      <div>

                        <h3 className="font-bold text-white">
                          {testimonial.name}
                        </h3>

                        <p className="mt-1 text-xs text-gray-600">
                          {testimonial.role}
                        </p>

                      </div>

                    </div>


                    {/* QUOTE ICON */}

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9AF358]/10 text-[#9AF358]">

                      <Quote size={19} />

                    </div>

                  </div>


                  {/* STARS */}

                  <div className="mt-7 flex gap-1">

                    {[...Array(testimonial.rating)].map(
                      (_, index) => (
                        <Star
                          key={index}
                          size={16}
                          fill="currentColor"
                          className="text-[#9AF358]"
                        />
                      )
                    )}

                  </div>


                  {/* MESSAGE */}

                  <p className="mt-6 text-sm leading-7 text-gray-400">
                    "{testimonial.message}"
                  </p>


                  {/* BOTTOM */}

                  <div className="mt-7 border-t border-white/10 pt-5">

                    <span className="text-xs font-semibold uppercase tracking-[2px] text-gray-600">
                      Verified Member
                    </span>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;
