import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock,
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const contactInfo = [
    {
      id: 1,
      icon: MapPin,
      title: "Visit Us",
      text: "123 Fitness Street, New Delhi, India",
    },
    {
      id: 2,
      icon: Phone,
      title: "Call Us",
      text: "+91 8368263310",
    },
    {
      id: 3,
      icon: Mail,
      title: "Email Us",
      text: "hello@fitzone.com",
    },
    {
      id: 4,
      icon: Clock,
      title: "Opening Hours",
      text: "Mon - Sun : 5:00 AM - 11:00 PM",
    },
  ];

  const socialLinks = [
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
    <main className="min-h-screen bg-[#050807] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-[60vh] items-center overflow-hidden px-6 pt-28 md:px-10 lg:px-16">

        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2000&q=80"
          alt="Contact FitZone"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <div className="max-w-4xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Contact FitZone
              </p>

            </div>

            <h1 className="text-3xl font-black uppercase leading-[0.9] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">

              LET'S GET
              <br />

              <span className="text-[#9AF358]">
                STRONGER
              </span>

              <br />

              TOGETHER.

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-300 md:text-md">
              Have a question about memberships, personal training or our
              programs? Get in touch with our team and we'll help you get
              started.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFO
      ===================================================== */}

      <section className="border-b border-white/10 bg-[#080d0b]">

        <div className="mx-auto grid max-w-7xl md:grid-cols-2 lg:grid-cols-4">

          {contactInfo.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`p-7 lg:p-8 ${
                  index !== contactInfo.length - 1
                    ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#9AF358]/10 text-[#9AF358]">

                  <Icon size={20} />

                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[3px] text-gray-600">
                  {item.title}
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT CONTENT */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9AF358]" />

              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                Get In Touch
              </p>

            </div>

            <h2 className="text-4xl font-black uppercase leading-[1] sm:text-5xl md:text-6xl">

              READY TO
              <br />

              <span className="text-[#9AF358]">
                START?
              </span>

            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-gray-500">
              Fill out the form and our team will get back to you as soon as
              possible. Whether you're new to fitness or an experienced
              athlete, we're here to help.
            </p>


            {/* Contact Points */}

            <div className="mt-10 space-y-5">

              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9AF358] text-black">

                  <Phone size={17} />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[2px] text-gray-600">
                    Call Us
                  </p>

                  <a href="tel:8368263310" className="mt-1 text-sm font-medium text-gray-300">
                    +91 8368263310
                  </a>

                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9AF358] text-black">

                  <Mail size={17} />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[2px] text-gray-600">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-300">
                    hello@fitzone.com
                  </p>

                </div>

              </div>

            </div>


            {/* Social Links */}

            <div className="mt-10">

              <p className="text-xs font-semibold uppercase tracking-[3px] text-gray-600">
                Follow Us
              </p>

              <div className="mt-4 flex gap-3">

                {socialLinks.map((social) => {

                  const Icon = social.icon;

                  return (
                    <a
                      key={social.id}
                      href="#"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-[#9AF358] hover:bg-[#9AF358] hover:text-black"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}

              </div>

            </div>

          </div>


          {/* FORM */}

          <div className="rounded-2xl border border-white/10 bg-[#080d0b] p-6 md:p-8 lg:p-10">

            {/* Success Message */}

            {submitted && (
              <div className="mb-7 rounded-xl border border-[#9AF358]/30 bg-[#9AF358]/10 px-5 py-4">

                <p className="text-sm font-semibold text-[#9AF358]">
                  Message sent successfully!
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Thank you for contacting FitZone. We'll get back to you
                  shortly.
                </p>

              </div>
            )}


            <form onSubmit={handleSubmit}>

              {/* NAME + EMAIL */}

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[2px] text-gray-500">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-gray-700 focus:border-[#9AF358]"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[2px] text-gray-500">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-gray-700 focus:border-[#9AF358]"
                  />

                </div>

              </div>


              {/* PHONE + SUBJECT */}

              <div className="mt-5 grid gap-5 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[2px] text-gray-500">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-gray-700 focus:border-[#9AF358]"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[2px] text-gray-500">
                    Subject
                  </label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border border-white/10 bg-[#080d0b] px-5 py-4 text-sm text-gray-400 outline-none transition-all focus:border-[#9AF358]"
                  >

                    <option value="">
                      Select Subject
                    </option>

                    <option value="membership">
                      Membership
                    </option>

                    <option value="personal-training">
                      Personal Training
                    </option>

                    <option value="programs">
                      Fitness Programs
                    </option>

                    <option value="general">
                      General Enquiry
                    </option>

                  </select>

                </div>

              </div>


              {/* MESSAGE */}

              <div className="mt-5">

                <label className="mb-2 block text-xs font-semibold uppercase tracking-[2px] text-gray-500">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows="6"
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-gray-700 focus:border-[#9AF358]"
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#9AF358] px-6 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(154,243,88,0.2)]"
              >

                Send Message

                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="bg-[#080d0b] px-6 py-20 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            {/* CONTENT */}

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-[#9AF358]" />

                <p className="text-sm font-semibold uppercase tracking-[4px] text-[#9AF358]">
                  Find Us
                </p>

              </div>

              <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">

                COME
                <br />

                <span className="text-[#9AF358]">
                  TRAIN WITH US.
                </span>

              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-gray-500">
                Visit our gym and experience the FitZone community yourself.
                Our team is ready to help you find the right training plan.
              </p>


              <div className="mt-8 flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#9AF358] text-black">

                  <MapPin size={20} />

                </div>

                <div>

                  <p className="text-sm font-bold uppercase">
                    FitZone Gym
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    123 Fitness Street,
                    <br />
                    New Delhi, India
                  </p>

                </div>

              </div>


              <a
                href="https://www.google.com/maps/@28.4822894,77.3243571,16z?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#9AF358]"
              >

                Get Directions

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />

              </a>

            </div>


            {/* MAP PLACEHOLDER */}

            <div className="relative h-[450px] overflow-hidden rounded-2xl border border-white/10 bg-[#050807]">

              <div className="absolute inset-0 opacity-30">

                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(154,243,88,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(154,243,88,0.12) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />

              </div>


              {/* Map Center */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#9AF358] text-black shadow-[0_0_50px_rgba(154,243,88,0.35)]">

                  <MapPin size={27} />

                  <span className="absolute inset-0 animate-ping rounded-full border border-[#9AF358]" />

                </div>

              </div>


              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-black/70 p-4 backdrop-blur-md">

                <p className="text-xs uppercase tracking-[2px] text-gray-500">
                  Our Location
                </p>

                <p className="mt-1 text-sm font-semibold">
                  123 Fitness Street, New Delhi
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-7xl rounded-3xl bg-[#9AF358] p-8 md:p-12 lg:p-16">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[4px] text-black/60">
                Your Journey Starts Here
              </p>

              <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-tight text-black sm:text-5xl md:text-6xl">

                STOP WAITING.
                <br />

                START TRAINING.

              </h2>

            </div>


            <Link
              to="/membership"
              className="group flex shrink-0 items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105"
            >

              View Membership

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

export default Contact;