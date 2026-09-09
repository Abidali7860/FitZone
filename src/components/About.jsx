import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { ArrowUpRight, Check } from "lucide-react";

const About = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Build Your Strength",
        "Transform Your Body",
        "Become Your Best",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="bg-[#050807] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* ================= LEFT IMAGE ================= */}

        <div className="relative">

          {/* Image */}

          <div className="relative h-[450px] overflow-hidden rounded-2xl md:h-[550px]">

            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
              alt="FitZone Gym"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          </div>


          {/* Experience Card */}

          <div className="absolute bottom-6 left-6 rounded-xl border border-[#9AF358]/30 bg-[#080d0b]/90 px-6 py-5 backdrop-blur-md">

            <p className="text-4xl font-black text-[#9AF358]">
              10+
            </p>

            <p className="mt-1 text-sm text-gray-300">
              Years of Experience
            </p>

          </div>


          {/* Decorative Box */}

          <div className="absolute -bottom-4 -right-4 -z-0 h-32 w-32 rounded-2xl border-4 border-[#9AF358]/20" />

        </div>


        {/* ================= RIGHT CONTENT ================= */}

        <div>

          {/* Small Heading */}

          <div className="mb-5 flex items-center gap-3">

            <span className="h-[2px] w-10 bg-[#9AF358]" />

            <p className="text-sm font-semibold tracking-[4px] text-[#9AF358]">
              ABOUT FITZONE
            </p>

          </div>


          {/* Heading */}

          <h2 className="text-3xl font-black leading-tight lg:text-4xl">

            WE DON'T JUST 
           

            <span className="ml-2 text-[#9AF358]">
              TRAIN
            </span>

            <br />

            WE TRANSFORM.

          </h2>


          {/* Typed Text */}

          <div className="mt-6 min-h-[35px] text-xl font-semibold text-[#9AF358] md:text-2xl">

            <span ref={typedRef}></span>

            <span className="ml-1 animate-pulse">
              |
            </span>

          </div>


          {/* Description */}

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400">
            FitZone is more than just a gym. We are a community built around
            strength, discipline and consistency. Our mission is to help you
            become stronger, healthier and more confident every single day.
          </p>


          <p className="mt-2 max-w-xl text-base leading-relaxed text-gray-400">
            Whether your goal is to build muscle, lose weight or improve your
            overall fitness, our expert trainers and modern facilities are here
            to help you achieve it.
          </p>


          {/* Features */}

          <div className="mt-7 grid gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9AF358] text-black">
                <Check size={15} strokeWidth={3} />
              </span>

              <span className="text-sm text-gray-300">
                Expert Trainers
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9AF358] text-black">
                <Check size={15} strokeWidth={3} />
              </span>

              <span className="text-sm text-gray-300">
                Modern Equipment
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9AF358] text-black">
                <Check size={15} strokeWidth={3} />
              </span>

              <span className="text-sm text-gray-300">
                Personalized Plans
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9AF358] text-black">
                <Check size={15} strokeWidth={3} />
              </span>

              <span className="text-sm text-gray-300">
                24/7 Gym Access
              </span>
            </div>

          </div>


          {/* CTA */}

          <a
            href="/about"
            className="group mt-9 inline-flex items-center gap-3 border-b border-[#9AF358] pb-2 text-sm font-bold uppercase tracking-wider text-[#9AF358] transition-all duration-300 hover:gap-5"
          >
            Discover Our Story

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;