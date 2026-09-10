import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Dumbbell,
  Target,
} from "lucide-react";

import exercises from "../data/exercises";

const ExerciseDetail = () => {
  const { id } = useParams();

  const exercise = exercises.find(
    (item) => item.id === Number(id)
  );

  // If exercise doesn't exist
  if (!exercise) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050807] px-6 text-white">

        <div className="text-center">

          <h1 className="text-5xl font-black uppercase">
            Exercise Not Found
          </h1>

          <p className="mt-4 text-gray-500">
            The exercise you are looking for doesn't exist.
          </p>

          <Link
            to="/exercises"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#9AF358] px-6 py-3 text-sm font-bold uppercase text-black"
          >
            <ArrowLeft size={17} />
            Back to Exercises
          </Link>

        </div>

      </main>
    );
  }

  const instructions = [
    `Set up correctly and prepare yourself for ${exercise.name}.`,
    `Maintain proper posture and keep your movements controlled throughout the exercise.`,
    `Perform the movement using a comfortable range of motion.`,
    `Focus on the ${exercise.muscle.toLowerCase()} and avoid using unnecessary momentum.`,
    `Complete ${exercise.sets} with ${exercise.reps}, resting properly between sets.`,
  ];

  return (
    <main className="min-h-screen bg-[#050807] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 lg:px-16 lg:pb-24">

        <div className="absolute inset-0">

          <img
            src={exercise.image}
            alt={exercise.name}
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#050807]/40" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050807] via-[#050807]/80 to-transparent" />

        </div>


        <div className="relative z-10 mx-auto max-w-7xl">

          {/* BACK */}

          <Link
            to="/exercises"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 transition-colors hover:text-[#9AF358]"
          >

            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            All Exercises

          </Link>


          <div className="mt-12 max-w-4xl" data-aos="fade-up">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-bold uppercase tracking-[4px] text-[#9AF358]">
                {exercise.category}
              </p>

            </div>


            <h1 className="text-3xl font-black uppercase leading-[0.9] sm:text-4xl md:text-5xl lg:text-6xl">

              {exercise.name}

            </h1>


            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-md">
              {exercise.description}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* IMAGE */}

          <div className="group overflow-hidden rounded-3xl border border-white/10" data-aos="fade-right">

            <div className="relative h-[420px] overflow-hidden md:h-[600px]">

              <img
                src={exercise.image}
                alt={exercise.name}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />


              <div className="absolute bottom-7 left-7">

                <div className="inline-flex items-center gap-2 rounded-full border border-[#9AF358]/30 bg-black/60 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#9AF358] backdrop-blur-md">

                  <Dumbbell size={15} />

                  {exercise.category}

                </div>

              </div>

            </div>

          </div>


          {/* INFORMATION */}

          <div className="flex flex-col justify-center" data-aos="fade-left" data-aos-delay="150">

            <p className="text-xs font-bold uppercase tracking-[4px] text-[#9AF358]">
              Exercise Information
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">

              BUILD
              <span className="text-[#9AF358]">
                {" "}STRENGTH.
              </span>

            </h2>


            {/* STATS */}

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <p className="text-xs uppercase tracking-[2px] text-gray-600">
                  Target Muscle
                </p>

                <div className="mt-3 flex items-center gap-2">

                  <Target
                    size={17}
                    className="text-[#9AF358]"
                  />

                  <p className="text-sm font-bold">
                    {exercise.muscle}
                  </p>

                </div>

              </div>


              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <p className="text-xs uppercase tracking-[2px] text-gray-600">
                  Difficulty
                </p>

                <p className="mt-3 text-sm font-bold text-[#9AF358]">
                  {exercise.level}
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <p className="text-xs uppercase tracking-[2px] text-gray-600">
                  Sets
                </p>

                <p className="mt-3 text-sm font-bold">
                  {exercise.sets}
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <p className="text-xs uppercase tracking-[2px] text-gray-600">
                  Reps
                </p>

                <p className="mt-3 text-sm font-bold">
                  {exercise.reps}
                </p>

              </div>

            </div>


            {/* DESCRIPTION */}

            <div className="mt-8 border-t border-white/10 pt-8">

              <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#9AF358]">
                About This Exercise
              </h3>

              <p className="mt-4 text-sm leading-8 text-gray-500">
                {exercise.description}
              </p>

            </div>


            {/* CTA */}

            <Link
              to="/contact"
              className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#9AF358] px-7 py-4 text-xs font-black uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(154,243,88,0.2)]"
            >

              Get Personal Training

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:rotate-45"
              />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW TO PERFORM
      ===================================================== */}

      <section className="border-t border-white/10 px-6 py-16 md:px-10 lg:px-16 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl" data-aos="fade-up">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-bold uppercase tracking-[4px] text-[#9AF358]">
                Training Guide
              </p>

            </div>

            <h2 className="text-4xl font-black uppercase md:text-6xl">

              HOW TO
              <span className="text-[#9AF358]">
                {" "}PERFORM.
              </span>

            </h2>

          </div>


          <div className="mt-12 grid gap-4 md:grid-cols-2">

            {instructions.map((instruction, index) => (

              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#9AF358]/30"
              >

                <div className="flex gap-5">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9AF358] text-sm font-black text-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>

                    <p className="text-sm leading-7 text-gray-400">
                      {instruction}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAINING TIP
      ===================================================== */}

      <section className="px-6 pb-20 md:px-10 lg:px-16 lg:pb-28">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl border border-[#9AF358]/20 bg-[#9AF358]/5 p-8 md:p-12" data-aos="zoom-in">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div className="flex gap-5">

                <CheckCircle2
                  size={28}
                  className="mt-1 shrink-0 text-[#9AF358]"
                />

                <div>

                  <p className="text-xs font-bold uppercase tracking-[3px] text-[#9AF358]">
                    FitZone Training Tip
                  </p>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
                    Always prioritize proper form over heavy weight. Controlled
                    movements and consistent training will help you achieve
                    better long-term results.
                  </p>

                </div>

              </div>


              <Link
                to="/programs"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-black uppercase tracking-wider text-[#9AF358]"
              >

                Explore Programs

                <ArrowUpRight
                  size={17}
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

export default ExerciseDetail;
