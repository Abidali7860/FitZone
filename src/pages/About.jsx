import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  Dumbbell,
  HeartPulse,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import heroImage from "../assets/images/hero/hero1.webp";
import aboutImage from "../assets/images/about/abt.webp";

const About = () => {
  const features = [
    {
      id: 1,
      icon: Dumbbell,
      title: "Modern Equipment",
      description:
        "Train with high-quality equipment designed for strength, cardio and functional workouts.",
    },
    {
      id: 2,
      icon: Users,
      title: "Expert Trainers",
      description:
        "Our experienced trainers help you train smarter, safer and more effectively.",
    },
    {
      id: 3,
      icon: HeartPulse,
      title: "Health Focused",
      description:
        "We focus on sustainable fitness habits that improve your health and lifestyle.",
    },
    {
      id: 4,
      icon: Zap,
      title: "Results Driven",
      description:
        "Every workout is designed to help you make progress and achieve measurable results.",
    },
  ];

  const stats = [
    {
      number: "10+",
      label: "Years Experience",
    },
    {
      number: "5K+",
      label: "Happy Members",
    },
    {
      number: "20+",
      label: "Expert Trainers",
    },
    {
      number: "50+",
      label: "Weekly Classes",
    },
  ];

  return (
    <main className="bg-[#050807] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex h-[50vh] md:h-[65vh] items-center overflow-hidden">

        <img
          src={heroImage}
          alt="FitZone Gym"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-10 lg:px-16">

          <div className="max-w-4xl" data-aos="fade-up">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                About FitZone
              </p>

            </div>

            <h1 className="text-3xl font-black uppercase leading-[0.9] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">

              BUILT FOR
              <br />

              <span className="text-[#9AF358]">
                STRONGER
              </span>

              <br />

              PEOPLE.

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 md:text-md">
              We are a fitness community built to help you become stronger,
              healthier and more confident through discipline, consistency and
              the right guidance.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#080d0b]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          {stats.map((stat, index) => (

            <div
              key={stat.label}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`p-7 text-center md:p-10 ${
                index !== stats.length - 1
                  ? "border-r border-white/10"
                  : ""
              }`}
            >

              <h3 className="text-3xl font-black text-[#9AF358] md:text-4xl">
                {stat.number}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[2px] text-gray-500">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* IMAGE */}

          <div className="relative" data-aos="fade-down">

            <div className="relative h-[500px] overflow-hidden rounded-2xl md:h-[600px]">

              <img
                src={aboutImage}
                alt="Fitness training"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            </div>


            {/* Floating Card */}

            <div className="absolute bottom-6 left-6 rounded-xl border border-[#9AF358]/30 bg-[#080d0b]/90 px-6 py-5 backdrop-blur-md">

              <p className="text-3xl font-black text-[#9AF358]">
                2016
              </p>

              <p className="mt-1 text-sm text-gray-300">
                Our Journey Started
              </p>

            </div>

          </div>


          {/* CONTENT */}

          <div data-aos="fade-up" data-aos-delay="150">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Our Story
              </p>

            </div>


            <h2 className="text-4xl font-black uppercase leading-[1] sm:text-5xl md:text-6xl">

              WE STARTED WITH
              <br />

              <span className="text-[#9AF358]">
                ONE SIMPLE
              </span>

              <br />

              BELIEF.

            </h2>


            <p className="mt-7 text-base leading-8 text-gray-400">
              FitZone was created with one simple idea — fitness should be
              accessible, motivating and built around real results.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400">
              What started as a small training space has grown into a
              community of people who believe in pushing their limits and
              becoming better every day.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400">
              Today, we combine modern equipment, experienced trainers and
              personalized programs to create an environment where everyone
              can work toward their own definition of success.
            </p>


            {/* Points */}

            <div className="mt-8 space-y-4">

              {[
                "Train with purpose",
                "Stay consistent",
                "Build lasting habits",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9AF358] text-black">

                    <Check
                      size={14}
                      strokeWidth={3}
                    />

                  </span>

                  <span className="text-sm font-medium text-gray-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section className="bg-[#080d0b] px-6 py-20 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12" data-aos="fade-up">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                What Drives Us
              </p>

            </div>

            <h2 className="text-4xl font-black uppercase sm:text-5xl md:text-6xl">

              OUR
              <span className="text-[#9AF358]">
                PURPOSE.
              </span>

            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {/* Mission */}

            <div className="group rounded-2xl border border-white/10 bg-[#050807] p-8 transition-all duration-500 hover:border-[#9AF358]/40 md:p-10" data-aos="fade-down">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#9AF358] text-black">

                <Target size={27} />

              </div>

              <h3 className="mt-8 text-3xl font-black uppercase">
                Our Mission
              </h3>

              <p className="mt-5 max-w-xl text-base leading-8 text-gray-500">
                To help people build a stronger body and stronger mindset by
                providing quality training, expert guidance and a supportive
                fitness community.
              </p>

            </div>


            {/* Vision */}

            <div className="group rounded-2xl border border-white/10 bg-[#050807] p-8 transition-all duration-500 hover:border-[#9AF358]/40 md:p-10" data-aos="fade-up" data-aos-delay="150">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#9AF358] text-black">

                <Trophy size={27} />

              </div>

              <h3 className="mt-8 text-3xl font-black uppercase">
                Our Vision
              </h3>

              <p className="mt-5 max-w-xl text-base leading-8 text-gray-500">
                To create a fitness community where people feel motivated,
                supported and confident enough to achieve goals they once
                thought were impossible.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY FITZONE
      ===================================================== */}

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT */}

            <div data-aos="fade-down">

              <div className="mb-5 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-[#9AF358]" />

                <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                  Why FitZone
                </p>

              </div>

              <h2 className="text-4xl font-black uppercase leading-[1] sm:text-5xl md:text-6xl">

                MORE THAN
                <br />

                <span className="text-[#9AF358]">
                  JUST A GYM.
                </span>

              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-gray-500">
               Everything we do is focused on helping you become stronger, healthier, and more confident. From personalized training programs and expert coaching to modern equipment and a supportive community, we create an environment where you can push your limits, stay consistent, and achieve meaningful results. Whether your goal is to build muscle, lose weight, improve your strength, or simply live a healthier lifestyle, FitZone gives you the guidance, motivation, and tools you need to keep moving forward.

              </p>

            </div>


            {/* FEATURES */}

            <div className="grid gap-4 sm:grid-cols-2">

              {features.map((feature) => {

                const Icon = feature.icon;

                return (
                  <div
                    key={feature.id}
                    data-aos="fade-up"
                    data-aos-delay={feature.id * 100}
                    className="group rounded-2xl border border-white/10 bg-[#080d0b] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#9AF358]/40"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#9AF358]/20 bg-[#9AF358]/5 text-[#9AF358] transition-all duration-300 group-hover:bg-[#9AF358] group-hover:text-black">

                      <Icon size={23} />

                    </div>

                    <h3 className="mt-6 text-xl font-bold uppercase">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {feature.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAINING PHILOSOPHY
      ===================================================== */}

      <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16 lg:py-32">

        <img
          src={heroImage}
          alt="Training"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 mx-auto max-w-5xl text-center" data-aos="zoom-in">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
            Our Philosophy
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-tight sm:text-5xl md:text-7xl">

            DISCIPLINE
            <span className="text-[#9AF358]">.</span>
            <br />

            CONSISTENCY
            <span className="text-[#9AF358]">.</span>
            <br />

            RESULTS
            <span className="text-[#9AF358]">.</span>

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
            Motivation gets you started. Discipline keeps you moving.
            Consistency creates the results.
          </p>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-10 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto overflow-hidden rounded-3xl border border-[#9AF358]/20 bg-[#9AF358]">

          <div className="flex flex-col items-start justify-between gap-8 p-8 md:p-12 lg:flex-row lg:items-center lg:p-16" data-aos="fade-up">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[4px] text-black/60">
                Ready To Start?
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-black sm:text-3xl md:text-4xl">
                YOUR STRONGEST
                <br />
                VERSION STARTS NOW.
              </h2>

            </div>


            <Link
              to="/contact"
              className="group flex shrink-0 items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105"
            >

              Join FitZone

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:rotate-45"
              />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;
