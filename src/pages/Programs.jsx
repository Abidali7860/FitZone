import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock,
  Dumbbell,
  Search,
} from "lucide-react";

import programs from "../data/programs";

const Programs = () => {
  const [search, setSearch] = useState("");

  const filteredPrograms = programs.filter((program) =>
    program.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#050807] text-white">

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-[55vh] items-center overflow-hidden px-6 pt-28 md:px-10 lg:px-16">

        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
          alt="Gym"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Fitness Programs
              </p>

            </div>

            <h1 className="text-3xl font-black uppercase leading-[0.9] sm:text-4xl md:text-5xl lg:text-6xl">

              TRAIN
              <br />

              <span className="text-[#9AF358]">
                YOUR WAY.
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:text-md">
              Choose the right training program and start your journey toward
              a stronger, healthier and better version of yourself.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PROGRAM SECTION ================= */}

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <div>

              <div className="mb-4 flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#9AF358]" />

                <p className="text-sm font-semibold uppercase tracking-[3px] text-[#9AF358]">
                  Our Programs
                </p>

              </div>

              <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
                FIND YOUR
                <span className="text-[#9AF358]"> PROGRAM.</span>
              </h2>

            </div>


            {/* Search */}

            <div className="relative w-full md:w-80">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="text"
                placeholder="Search program..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-white/5 py-3.5 pl-11 pr-5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#9AF358]"
              />

            </div>

          </div>


          {/* ================= PROGRAM CARDS ================= */}

          {filteredPrograms.length > 0 ? (

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {filteredPrograms.map((program) => (

                <div
                  key={program.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#080d0b] transition-all duration-500 hover:-translate-y-2 hover:border-[#9AF358]/40 hover:shadow-[0_20px_60px_rgba(154,243,88,0.08)]"
                >

                  {/* Image */}

                  <div className="relative h-[380px] overflow-hidden">

                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d0b] via-black/20 to-transparent" />


                    {/* Number */}

                    <span className="absolute left-5 top-5 text-5xl font-black text-white/20">
                      {program.number}
                    </span>


                    {/* Level */}

                    <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      {program.level}
                    </div>


                    {/* Bottom Content */}

                    <div className="absolute bottom-0 left-0 w-full p-6">

                      <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-[#9AF358]">
                        Fitness Program
                      </p>

                      <h3 className="text-3xl font-black uppercase">
                        {program.title}
                      </h3>

                    </div>

                  </div>


                  {/* Card Content */}

                  <div className="p-6">

                    <p className="text-sm leading-7 text-gray-500">
                      {program.description}
                    </p>


                    {/* Duration + Level */}

                    <div className="mt-6 flex items-center gap-6 border-t border-white/10 pt-5">

                      <div className="flex items-center gap-2 text-sm text-gray-400">

                        <Clock
                          size={17}
                          className="text-[#9AF358]"
                        />

                        {program.duration}

                      </div>


                      <div className="flex items-center gap-2 text-sm text-gray-400">

                        <Dumbbell
                          size={17}
                          className="text-[#9AF358]"
                        />

                        {program.level}

                      </div>

                    </div>


                    {/* View Program */}

                    <Link
                      to={`/programs/${program.id}`}
                      className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#9AF358]"
                    >

                      View Program

                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover/link:rotate-45"
                      />

                    </Link>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* No Result */

            <div className="mt-12 rounded-2xl border border-white/10 py-20 text-center">

              <h3 className="text-2xl font-bold">
                No Program Found
              </h3>

              <p className="mt-2 text-gray-500">
                Try searching for another program.
              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  );
};

export default Programs;