import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  ArrowUpRight,
  Check,
  Crown,
  Sparkles,
} from "lucide-react";

import memberships from "../data/memberships";
import heroImage from "../assets/images/hero/hero1.webp";

const Membership = () => {
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);

const faqs = [
  {
    id: 1,
    question: "Can I cancel my membership anytime?",
    answer:
      "Yes. You can cancel your membership according to the terms of your selected plan. Our team will help you with the cancellation process.",
  },
  {
    id: 2,
    question: "Can I switch my membership plan?",
    answer:
      "Absolutely. You can upgrade or change your membership plan. Contact our team and we will help you choose the right option.",
  },
  {
    id: 3,
    question: "Do you provide personal training?",
    answer:
      "Yes. Personal training is available with our Pro and Elite memberships. You can work directly with an experienced trainer.",
  },
  {
    id: 4,
    question: "Do you offer a trial workout?",
    answer:
      "Yes. New members can contact our team to check current trial and introductory offers.",
  },
  {
    id: 5,
    question: "Are group fitness classes included?",
    answer:
      "Group fitness classes are included with selected membership plans. Check the plan details above for complete information.",
  },
  {
    id: 6,
    question: "What should I bring to the gym?",
    answer:
      "Bring comfortable workout clothes, training shoes, a water bottle and a towel. Everything else you need for your workout is available at the gym.",
  },
];

  return (
    <main className="min-h-screen bg-[#050807] text-white">

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-[60vh] items-center overflow-hidden px-6 pt-28 md:px-10 lg:px-16">

        <img
          src={heroImage}
          alt="FitZone Membership"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <div className="max-w-4xl" data-aos="fade-up">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Membership
              </p>

            </div>

            <h1 className="text-3xl font-black uppercase leading-[0.9] sm:text-4xl md:text-5xl lg:text-6xl">

              INVEST IN
              <br />

              <span className="text-[#9AF358]">
                YOURSELF.
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-300 md:text-md">
              Choose a membership that fits your goals, your lifestyle and
              your commitment to becoming stronger every day.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PRICING ================= */}

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="text-center" data-aos="fade-up">

            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
              Flexible Plans
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl md:text-6xl">
              CHOOSE YOUR
              <span className="text-[#9AF358]"> PLAN.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
              No complicated plans. Just everything you need to train hard,
              stay consistent and get results.
            </p>

          </div>


          {/* BILLING TOGGLE */}

          <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="100">

            <div className="flex rounded-full border border-white/10 bg-white/5 p-1">

              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  billing === "monthly"
                    ? "bg-[#9AF358] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBilling("yearly")}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  billing === "yearly"
                    ? "bg-[#9AF358] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Yearly
              </button>

            </div>

          </div>


          {/* ================= CARDS ================= */}

          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {memberships.map((plan) => (

              <div
                key={plan.id}
                data-aos="fade-up"
                data-aos-delay={plan.id * 120}
                className={`relative rounded-2xl border p-7 transition-all duration-500 md:p-8 ${
                  plan.popular
                    ? "border-[#9AF358] bg-[#0a100d] shadow-[0_20px_80px_rgba(154,243,88,0.08)]"
                    : "border-white/10 bg-[#080d0b] hover:-translate-y-2 hover:border-[#9AF358]/40"
                }`}
              >

                {/* POPULAR */}

                {plan.popular && (
                  <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-[#9AF358] px-5 py-2 text-xs font-bold uppercase tracking-wider text-black">

                    <Sparkles size={14} />

                    Most Popular

                  </div>
                )}


                {/* ICON */}

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                    plan.popular
                      ? "bg-[#9AF358] text-black"
                      : "bg-[#9AF358]/10 text-[#9AF358]"
                  }`}
                >
                  {plan.popular ? (
                    <Crown size={25} />
                  ) : (
                    <Sparkles size={25} />
                  )}
                </div>


                {/* NAME */}

                <h3 className="mt-7 text-3xl font-black uppercase">
                  {plan.name}
                </h3>


                <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-500">
                  {plan.description}
                </p>


                {/* PRICE */}

                <div className="mt-7">

                  <div className="flex items-end gap-2">

                    <span className="text-5xl font-black">
                      ₹
                      {billing === "monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice}
                    </span>

                    <span className="mb-2 text-sm text-gray-500">
                      /{billing === "monthly" ? "month" : "year"}
                    </span>

                  </div>

                  {billing === "yearly" && (
                    <p className="mt-2 text-xs font-semibold text-[#9AF358]">
                      Save more with yearly membership
                    </p>
                  )}

                </div>


                {/* BUTTON */}

                <Link
                  to="/contact"
                  className={`group mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#9AF358] text-black hover:shadow-[0_0_30px_rgba(154,243,88,0.25)]"
                      : "border border-white/10 bg-white/5 text-white hover:border-[#9AF358] hover:text-[#9AF358]"
                  }`}
                >

                  Get Started

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />

                </Link>


                {/* FEATURES */}

                <div className="mt-8 border-t border-white/10 pt-7">

                  <p className="text-xs font-bold uppercase tracking-[3px] text-gray-500">
                    What's Included
                  </p>

                  <div className="mt-5 space-y-4">

                    {plan.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >

                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9AF358]/10 text-[#9AF358]">

                          <Check
                            size={14}
                            strokeWidth={3}
                          />

                        </span>

                        <span className="text-sm text-gray-300">
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= WHY MEMBERSHIP ================= */}

      <section className="bg-[#080d0b] px-6 py-20 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Why Join FitZone?
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">

                MORE THAN
                <br />

                <span className="text-[#9AF358]">
                  A MEMBERSHIP.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-500">
                Your membership gives you access to more than equipment. It
                gives you a place to build discipline, meet like-minded
                people and work toward real results.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Modern Equipment",
                "Expert Trainers",
                "Flexible Timings",
                "Clean Environment",
                "Personalized Programs",
                "Supportive Community",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#050807] p-5 transition-all duration-300 hover:border-[#9AF358]/40"
                >

                  <Check
                    size={18}
                    className="shrink-0 text-[#9AF358]"
                  />

                  <span className="text-sm font-medium text-gray-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}
     

<section className="bg-[#050807] px-6 py-20 md:px-10 lg:px-16 lg:py-28">

  <div className="mx-auto max-w-4xl">

    {/* Header */}

    <div className="text-center">

      <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
        FAQ
      </p>

      <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl md:text-6xl">
        GOT
        <span className="text-[#9AF358]"> QUESTIONS?</span>
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
        Everything you need to know about our memberships, training and
        fitness programs.
      </p>

    </div>


    {/* FAQ LIST */}

    <div className="mt-12 space-y-3">

      {faqs.map((faq, index) => {

        const isOpen = openFaq === faq.id;

        return (
          <div
            key={faq.id}
            data-aos="fade-up"
            data-aos-delay={index * 75}
            className={`overflow-hidden rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-[#9AF358]/40 bg-[#080d0b]"
                : "border-white/10 bg-[#080d0b]"
            }`}
          >

            {/* QUESTION */}

            <button
              onClick={() =>
                setOpenFaq(isOpen ? null : faq.id)
              }
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-7 md:py-6"
            >

              <span
                className={`text-sm font-bold uppercase tracking-wide transition-colors md:text-base ${
                  isOpen
                    ? "text-[#9AF358]"
                    : "text-white"
                }`}
              >
                {faq.question}
              </span>

              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "border-[#9AF358] bg-[#9AF358] text-black"
                    : "border-white/10 text-gray-400"
                }`}
              >

                <ChevronDown
                  size={17}
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />

              </span>

            </button>


            {/* ANSWER */}

            <div
              className={`grid transition-all duration-300 ${
                isOpen
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >

              <div className="overflow-hidden">

                <p className="border-t border-white/10 px-6 pb-6 pt-5 text-sm leading-7 text-gray-500 md:px-7">
                  {faq.answer}
                </p>

              </div>

            </div>

          </div>
        );
      })}

    </div>

  </div>

</section>

      {/* ================= CTA ================= */}

      <section className="px-6 py-10 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-7xl rounded-3xl bg-[#9AF358] p-8 md:p-12 lg:p-16">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center" data-aos="zoom-in">

            <div>

              <p className="text-sm font-bold uppercase tracking-[4px] text-black/60">
                Start Today
              </p>

              <h2 className="mt-3 max-w-3xl text-2xl font-black uppercase leading-tight text-black sm:text-3xl md:text-4xl">

                YOUR BEST
                <br />
                INVESTMENT IS YOU.

              </h2>

            </div>


            <Link
              to="/contact"
              className="group flex shrink-0 items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105"
            >

              Join Now

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

export default Membership;
