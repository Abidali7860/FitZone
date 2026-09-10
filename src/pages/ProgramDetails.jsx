import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock,
  Dumbbell,
  Target,
} from "lucide-react";

import programs from "../data/programs";

const ProgramDetails = () => {
  const { id } = useParams();

  const program = programs.find(
    (item) => item.id === Number(id)
  );

  // ================= NOT FOUND =================

  if (!program) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050807] px-6 text-white">
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
            404
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase">
            Program Not Found
          </h1>

          <Link
            to="/programs"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#9AF358] px-6 py-3 text-sm font-bold text-black"
          >
            <ArrowLeft size={17} />
            Back To Programs
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050807] text-white">

      {/* ================= HERO ================= */}

      <section className="relative min-h-[75vh] overflow-hidden">

        {/* Background Image */}

        <img
          src={program.image}
          alt={program.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/30" />


        {/* Content */}

        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl items-end px-6 pb-16 pt-32 md:px-10 lg:px-16 lg:pb-20">

          <div className="max-w-4xl" data-aos="fade-up">

            {/* Back */}

            <Link
              to="/programs"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-[#9AF358]"
            >
              <ArrowLeft size={17} />
              Back To Programs
            </Link>


            {/* Number */}

            <p className="text-6xl font-black text-white/10 md:text-8xl">
              {program.number}
            </p>


            {/* Small Title */}

            <div className="mt-[-20px] flex items-center gap-3 md:mt-[-30px]">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Fitness Program
              </p>

            </div>


            {/* Title */}

            <h1 className="mt-5 text-3xl font-black uppercase leading-[0.9] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {program.title}
            </h1>


            {/* Description */}

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
              {program.description}
            </p>


            {/* Info */}

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm backdrop-blur-md">
                <Clock
                  size={17}
                  className="text-[#9AF358]"
                />
                {program.duration}
              </div>


              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm backdrop-blur-md">
                <Dumbbell
                  size={17}
                  className="text-[#9AF358]"
                />
                {program.level}
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= DETAILS ================= */}

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_0.6fr]">

          {/* LEFT */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Program Overview
              </p>

            </div>


            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
              BUILD A
              <br />
              <span className="text-[#9AF358]">
                STRONGER YOU.
              </span>
            </h2>


            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400">
              Our {program.title.toLowerCase()} program is designed to help
              you stay consistent, improve your fitness and achieve measurable
              results. Follow a structured training approach with proper
              guidance and progressive workouts.
            </p>


            {/* Benefits */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {[
                "Personalized workout plan",
                "Professional trainer guidance",
                "Progress tracking",
                "Proper exercise technique",
                "Strength & endurance improvement",
                "Consistent fitness routine",
              ].map((benefit, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#9AF358]/30"
                >

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9AF358] text-black">

                    <Check
                      size={15}
                      strokeWidth={3}
                    />

                  </span>

                  <span className="text-sm text-gray-300">
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* RIGHT CARD */}

          <div>

          <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#080d0b] p-7" data-aos="fade-left" data-aos-delay="150">

              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#9AF358]">
                Program Details
              </p>


              <div className="mt-7 space-y-5">

                {/* Duration */}

                <div className="flex items-center justify-between border-b border-white/10 pb-5">

                  <div className="flex items-center gap-3">

                    <Clock
                      size={19}
                      className="text-[#9AF358]"
                    />

                    <span className="text-sm text-gray-400">
                      Duration
                    </span>

                  </div>

                  <span className="text-sm font-semibold">
                    {program.duration}
                  </span>

                </div>


                {/* Level */}

                <div className="flex items-center justify-between border-b border-white/10 pb-5">

                  <div className="flex items-center gap-3">

                    <Dumbbell
                      size={19}
                      className="text-[#9AF358]"
                    />

                    <span className="text-sm text-gray-400">
                      Level
                    </span>

                  </div>

                  <span className="text-sm font-semibold">
                    {program.level}
                  </span>

                </div>


                {/* Goal */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <Target
                      size={19}
                      className="text-[#9AF358]"
                    />

                    <span className="text-sm text-gray-400">
                      Goal
                    </span>

                  </div>

                  <span className="text-sm font-semibold">
                    Fitness
                  </span>

                </div>

              </div>


              {/* CTA */}

              <Link
                to="/contact"
                className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#9AF358] px-6 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(154,243,88,0.25)]"
              >

                Join This Program

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ProgramDetails;
