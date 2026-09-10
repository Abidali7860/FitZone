import React, { useState } from "react";
import { ArrowUpRight, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

import exercises from "../data/exercises";

const Exercises = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Legs",
    "Biceps",
    "Chest",
    "Back",
    "Shoulders",
    "Triceps",
  ];

  const filteredExercises =
    activeCategory === "All"
      ? exercises
      : exercises.filter((exercise) => exercise.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#050807] text-white">
      {/* ================= HERO ================= */}

      <section className="relative flex min-h-[55vh] items-center overflow-hidden px-6 pt-28 md:px-10 lg:px-16">
        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2000&q=80"
          alt="Exercises"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-4xl" data-aos="fade-up">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Training Library
              </p>
            </div>

            <h1 className="text-3xl font-black uppercase leading-[0.9] sm:text-4xl md:text-5xl lg:text-6xl">
              TRAIN
              <br />
              <span className="text-[#9AF358]">SMARTER.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 md:text-md">
              Explore exercises designed to help you build strength, improve
              performance and transform your body.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EXERCISES ================= */}

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end" data-aos="fade-up">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#9AF358]" />

                <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                  Exercise Database
                </p>
              </div>

              <h2 className="text-2xl font-black uppercase sm:text-3xl md:text-4xl">
                FIND YOUR
                <span className="text-[#9AF358]"> WORKOUT.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Select a muscle group to discover exercises, recommended sets,
              reps and training levels.
            </p>
          </div>

          {/* ================= FILTER ================= */}

          <div className="mt-10 flex gap-3 overflow-x-auto pb-3" data-aos="fade-up" data-aos-delay="100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "border-[#9AF358] bg-[#9AF358] text-black"
                    : "border-white/10 bg-white/5 text-gray-500 hover:border-[#9AF358]/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ================= CARDS ================= */}

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredExercises.map((exercise) => (
              <div
                key={exercise.id}
                data-aos="fade-up"
                data-aos-delay={(exercise.id % 6) * 80}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#080d0b] transition-all duration-500 hover:-translate-y-2 hover:border-[#9AF358]/40"
              >
                {/* IMAGE */}

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* CATEGORY */}

                  <div className="absolute left-5 top-5 rounded-full bg-[#9AF358] px-4 py-2 text-[10px] font-black uppercase tracking-wider text-black">
                    {exercise.category}
                  </div>

                  {/* ICON */}

                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-[#9AF358] backdrop-blur-md">
                    <Dumbbell size={19} />
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase">
                        {exercise.name}
                      </h3>

                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#9AF358]">
                        {exercise.muscle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {exercise.description}
                  </p>

                  {/* STATS */}

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-[10px] uppercase tracking-[2px] text-gray-600">
                        Sets
                      </p>

                      <p className="mt-1 text-sm font-bold">{exercise.sets}</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-[10px] uppercase tracking-[2px] text-gray-600">
                        Reps
                      </p>

                      <p className="mt-1 text-sm font-bold">{exercise.reps}</p>
                    </div>
                  </div>

                  {/* FOOTER */}

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                      {exercise.level}
                    </span>

                    <Link
                      to={`/exercises/${exercise.id}`}
                      className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9AF358]"
                    >
                      View Exercise
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/link:rotate-45"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Exercises;
