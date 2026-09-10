import React from "react";
import { ArrowUpRight, Clock, Dumbbell } from "lucide-react";
import programs from "../data/programs";

const ProgramCard = ({ program, index }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f0d] transition-all duration-500 hover:-translate-y-2 hover:border-[#9AF358]/40 hover:shadow-[0_20px_60px_rgba(154,243,88,0.08)]" data-aos="fade-up" data-aos-delay={index * 120}>

      {/* Image */}

      <div className="relative h-[420px] overflow-hidden">

        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-black/30 to-transparent" />

        {/* Green Hover Overlay */}

        <div className="absolute inset-0 bg-[#9AF358]/0 transition-all duration-500 group-hover:bg-[#9AF358]/5" />


        {/* Number */}

        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-sm font-bold text-white backdrop-blur-md">
          {program.number}
        </div>


        {/* Arrow */}

        <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#9AF358] group-hover:bg-[#9AF358] group-hover:text-black">
          <ArrowUpRight
            size={19}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </div>


        {/* Content */}

        <div className="absolute bottom-0 left-0 w-full p-6">

          <div className="mb-3 flex items-center gap-2">

            <span className="h-[2px] w-6 bg-[#9AF358]" />

            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#9AF358]">
              Fitness Program
            </span>

          </div>


          <h3 className="text-3xl font-black uppercase tracking-tight text-white md:text-[2rem]">
            {program.title}
          </h3>


          <p className="mt-3 max-w-md text-sm leading-6 text-gray-300">
            {program.description}
          </p>


          {/* Info */}

          <div className="mt-5 flex items-center gap-5 border-t border-white/15 pt-4">

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Clock
                size={16}
                className="text-[#9AF358]"
              />

              {program.duration}
            </div>


            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Dumbbell
                size={16}
                className="text-[#9AF358]"
              />

              {program.level}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};


const PopularPrograms = () => {
  return (
    <section className="bg-[#050807] px-6 py-20 md:px-10 lg:px-16 lg:py-28">

      <div className="mx-auto max-w-7xl">


        {/* ================= HEADER ================= */}

        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">

          <div data-aos="fade-down">

            {/* Small Heading */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold tracking-[4px] text-[#9AF358]">
                OUR PROGRAMS
              </p>

            </div>


            {/* Main Heading */}

            <h2 className="max-w-3xl text-4xl font-black uppercase leading-[1] tracking-tight text-white sm:text-5xl md:text-6xl">

              TRAIN HARD.
              <br />

              <span className="text-[#9AF358]">
                GET STRONGER.
              </span>

            </h2>

          </div>


          {/* View All */}

          <a
            href="/programs"
            data-aos="fade-up"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#9AF358] pb-2 text-sm font-bold uppercase tracking-wider text-[#9AF358]"
          >
            View All Programs

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </a>

        </div>


        {/* ================= PROGRAM CARDS ================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default PopularPrograms;
