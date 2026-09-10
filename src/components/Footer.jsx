import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed:", email);

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Programs",
      path: "/programs",
    },
    {
      name: "Exercises",
      path: "/exercises",
    },
    {
      name: "Membership",
      path: "/membership",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const programs = [
    "Weight Loss",
    "Muscle Building",
    "Strength Training",
    "Personal Training",
    "Cardio Training",
  ];

  const socials = [
    {
      id: 1,
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      id: 2,
      icon: FaFacebookF,
      label: "Facebook",
    },
    {
      id: 3,
      icon: FaYoutube,
      label: "YouTube",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#030504] text-white">

      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="border-b border-white/10 px-6 py-16 md:px-10 lg:px-16">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">

          <div className="max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[4px] text-[#9AF358]">
              Stay Strong
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl md:text-5xl">

              GET FITNESS
              <span className="text-[#9AF358]">
                {" "}UPDATES.
              </span>

            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
              Get workout tips, fitness motivation, special offers and
              FitZone updates directly in your inbox.
            </p>

          </div>


          {/* Newsletter Form */}

          <div className="w-full max-w-xl">

            {subscribed ? (

              <div className="rounded-full border border-[#9AF358]/30 bg-[#9AF358]/10 px-6 py-4 text-center">

                <p className="text-sm font-semibold text-[#9AF358]">
                  Thanks for subscribing!
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-3 sm:flex-row"
              >

                <div className="relative flex-1">

                  <Mail
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-full border border-white/10 bg-white/5 py-4 pl-12 pr-5 text-sm text-white outline-none transition-all placeholder:text-gray-700 focus:border-[#9AF358]"
                  />

                </div>


                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-full bg-[#9AF358] px-7 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(154,243,88,0.2)]"
                >

                  Subscribe

                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

              </form>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-20">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">

          {/* BRAND */}

          <div>

            <Link
              to="/"
              className="inline-block"
            >

              <h2 className="text-3xl font-black uppercase tracking-tight">

                FIT
                <span className="text-[#9AF358]">
                  ZONE
                </span>

              </h2>

            </Link>


            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              More than a gym. FitZone is a community built around discipline,
              consistency and becoming a stronger version of yourself.
            </p>


            {/* Social */}

            <div className="mt-7 flex gap-3">

              {socials.map((social) => {

                const Icon = social.icon;

                return (
                  <a
                    key={social.id}
                    href="#"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-500 transition-all duration-300 hover:border-[#9AF358] hover:bg-[#9AF358] hover:text-black"
                  >

                    <Icon size={16} />

                  </a>
                );

              })}

            </div>

          </div>


          {/* QUICK LINKS */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#9AF358]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-sm text-gray-500 transition-colors duration-300 hover:text-white"
                  >

                    {link.name}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />

                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* PROGRAMS */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#9AF358]">
              Programs
            </h3>

            <ul className="mt-6 space-y-4">

              {programs.map((program) => (

                <li key={program}>

                  <Link
                    to="/programs"
                    className="group inline-flex items-center gap-1 text-sm text-gray-500 transition-colors duration-300 hover:text-white"
                  >

                    {program}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />

                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* CONTACT */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#9AF358]">
              Contact
            </h3>


            <div className="mt-6 space-y-5">

              {/* Address */}

              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#9AF358]"
                />

                <p className="text-sm leading-6 text-gray-500">
                  123 Fitness Street,
                  <br />
                  New Delhi, India
                </p>

              </div>


              {/* Phone */}

              <div className="flex gap-3">

                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#9AF358]"
                />

                <a
                  href="tel:8368263310"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  +91 8368263310
                </a>

              </div>


              {/* Email */}

              <div className="flex gap-3">

                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#9AF358]"
                />

                <a
                  href="mailto:hello@fitzone.com"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  hello@fitzone.com
                </a>

              </div>


              {/* Hours */}

              <div className="pt-2">

                <p className="text-xs uppercase tracking-[2px] text-gray-700">
                  Opening Hours
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Monday - Sunday
                </p>

                <p className="mt-1 text-sm font-medium text-gray-300">
                  5:00 AM - 11:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <section className="border-t border-white/10 px-6 py-2 md:px-10 lg:px-16">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 text-center md:flex-row md:text-left">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} FitZone. All rights reserved.
          </p>


         

        </div>

      </section>

    </footer>
  );
};

export default Footer;