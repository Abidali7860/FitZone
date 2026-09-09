import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import trainers from "../data/trainers";

const TrainerCard = ({ trainer }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d0b] transition-all duration-500 hover:-translate-y-2 hover:border-[#9AF358]/40 hover:shadow-[0_20px_60px_rgba(154,243,88,0.08)]">

      {/* ================= IMAGE ================= */}

      <div className="relative h-[430px] overflow-hidden">

        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-black/20 to-transparent" />


        {/* Experience */}

        <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
          {trainer.experience}
        </div>


        {/* Social Icons */}

        <div className="absolute left-5 top-5 flex translate-y-[-10px] flex-col gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:border-[#9AF358] hover:bg-[#9AF358] hover:text-black"
          >
            <FaInstagram size={17} />
          </a>

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:border-[#9AF358] hover:bg-[#9AF358] hover:text-black"
          >
            <FaFacebookF size={17} />
          </a>

        </div>


        {/* ================= CONTENT ================= */}

        <div className="absolute bottom-0 left-0 w-full p-6">

          {/* Role */}

          <div className="mb-2 flex items-center gap-2">

            <span className="h-[2px] w-6 bg-[#9AF358]" />

            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#9AF358]">
              {trainer.role}
            </span>

          </div>


          {/* Name */}

          <h3 className="text-2xl font-black uppercase tracking-tight text-white">
            {trainer.name}
          </h3>


          {/* Specialization */}

          <p className="mt-2 text-sm text-gray-400">
            {trainer.specialization}
          </p>


          {/* View Profile */}

          {/* <a
            href={`/trainers/${trainer.id}`}
            className="group/link mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#9AF358]"
          >
            View Profile

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover/link:rotate-45"
            />
          </a> */}

        </div>

      </div>

    </div>
  );
};


const Trainers = () => {
  return (
    <section className="bg-[#050807] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-28">

      <div className="mx-auto max-w-7xl">


        {/* ================= HEADER ================= */}

        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">

          <div>

            {/* Small Title */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Meet The Team
              </p>

            </div>


            {/* Heading */}

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">

              TRAIN WITH
              <br />

              <span className="text-[#9AF358]">
                THE BEST.
              </span>

            </h2>

          </div>


          {/* Description + Link */}

          <div className="max-w-md">

            <p className="text-sm leading-7 text-gray-400 md:text-base">
              Our certified trainers are here to push your limits, improve
              your technique and help you reach your fitness goals.
            </p>


            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-3 border-b border-[#9AF358] pb-2 text-sm font-bold uppercase tracking-wider text-[#9AF358]"
            >
             
              Contact a Trainer

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>

          </div>

        </div>


        {/* ================= TRAINER GRID ================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Trainers;