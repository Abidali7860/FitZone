import React from "react";
import {
  Dumbbell,
  UserRoundCheck,
  Salad,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "Train with premium and modern equipment designed for every type of workout.",
  },
  {
    id: 2,
    icon: UserRoundCheck,
    title: "Expert Trainers",
    description:
      "Get professional guidance from experienced trainers who understand your goals.",
  },
  {
    id: 3,
    icon: Salad,
    title: "Personalized Diet",
    description:
      "Get nutrition guidance and customized diet plans according to your fitness goals.",
  },
  {
    id: 4,
    icon: Clock3,
    title: "24/7 Access",
    description:
      "Workout whenever you want with our flexible 24/7 gym access.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#080d0b] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          {/* LEFT CONTENT */}

          <div data-aos="fade-down">

            {/* Small Heading */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Why FitZone
              </p>
            </div>


            {/* Heading */}

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">

              MORE THAN
              <br />

              <span className="text-[#9AF358]">
                JUST A GYM.
              </span>

            </h2>

          </div>


          {/* RIGHT INTRO */}

          <div className="max-w-2xl lg:justify-self-end" data-aos="fade-up" data-aos-delay="150">

            <p className="text-base leading-7 text-gray-400 md:text-lg">
              At FitZone, we believe fitness is not just about lifting
              weights. It's about building discipline, confidence and a
              stronger version of yourself.
            </p>

            <a
              href="/about"
              className="group mt-6 inline-flex items-center gap-3 border-b border-[#9AF358] pb-2 text-sm font-bold uppercase tracking-wider text-[#9AF358]"
            >
              Discover FitZone

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>

          </div>

        </div>


        {/* ================= FEATURE CARDS ================= */}

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#050807] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#9AF358]/40 hover:shadow-[0_20px_50px_rgba(154,243,88,0.08)] ${
                  index === 0
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >

                {/* Number */}

                <span className="absolute right-5 top-5 text-xs font-bold text-white/10 transition-colors duration-300 group-hover:text-[#9AF358]/20">
                  0{index + 1}
                </span>


                {/* Icon */}

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#9AF358]/20 bg-[#9AF358]/5 text-[#9AF358] transition-all duration-300 group-hover:border-[#9AF358] group-hover:bg-[#9AF358] group-hover:text-black">

                  <Icon size={25} strokeWidth={1.8} />

                </div>


                {/* Title */}

                <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                  {feature.title}
                </h3>


                {/* Description */}

                <p className="mt-4 text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                  {feature.description}
                </p>


                {/* Bottom Line */}

                <div className="mt-7 h-[2px] w-8 bg-[#9AF358] transition-all duration-500 group-hover:w-full" />

              </div>
            );
          })}

        </div>


        {/* ================= BOTTOM STATS ================= */}

        <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-[#050807] sm:grid-cols-4" data-aos="zoom-in" data-aos-delay="150">

          <div className="border-b border-white/10 p-6 text-center sm:border-b-0 sm:border-r">
            <h3 className="text-3xl font-black text-[#9AF358]">
              10+
            </h3>

            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
              Years Experience
            </p>
          </div>


          <div className="border-b border-white/10 p-6 text-center sm:border-b-0 sm:border-r">
            <h3 className="text-3xl font-black text-[#9AF358]">
              5K+
            </h3>

            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
              Happy Members
            </p>
          </div>


          <div className="border-b border-white/10 p-6 text-center sm:border-b-0 sm:border-r">
            <h3 className="text-3xl font-black text-[#9AF358]">
              20+
            </h3>

            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
              Expert Trainers
            </p>
          </div>


          <div className="p-6 text-center">
            <h3 className="text-3xl font-black text-[#9AF358]">
              24/7
            </h3>

            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
              Gym Access
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
