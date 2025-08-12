import { motion } from "framer-motion";
import { contactData } from "../data/contactData";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import Section from "./ui/Section";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const iconMap = {
    github: <FaGithub size={22} aria-hidden="true" />,
    linkedin: <FaLinkedin size={22} aria-hidden="true" />,
    twitter: <FaTwitter size={22} aria-hidden="true" />,
    email: <FaEnvelope size={22} aria-hidden="true" />,
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit logic (email service / backend API)
    console.log("Form submitted:", formData);
  };

  return (
    <Section
      id="contact"
      title={contactData.title}
      subtitle={contactData.subtitle}
      tagline={contactData.tagline}
      className="relative py-20 overflow-hidden transition-colors duration-500 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute bg-blue-500 rounded-full top-1/4 left-1/2 w-72 sm:w-96 h-72 sm:h-96 mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute delay-700 bg-green-500 rounded-full bottom-1/4 right-1/2 w-72 sm:w-96 h-72 sm:h-96 mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-4 mx-auto sm:px-6 lg:px-12">
        {/* Contact Form */}
        <div className="p-6 bg-white border border-gray-200 shadow-lg dark:bg-white/5 dark:border-white/10 backdrop-blur-sm rounded-2xl sm:p-8 md:p-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-label="Contact form"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors bg-white border border-gray-300 rounded-xl dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors bg-white border border-gray-300 rounded-xl dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors bg-white border border-gray-300 rounded-xl dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                required
                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors bg-white border border-gray-300 resize-none rounded-xl dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                aria-label="Send message"
                className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 shadow-lg group bg-gradient-to-r from-blue-500 to-green-500 rounded-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-blue-400 to-green-400 group-hover:opacity-100"></div>
                <span className="relative flex items-center gap-2">
                  Send Message
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="pt-8 mt-12 text-center border-t border-gray-200 dark:border-white/10">
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Or reach out directly at
            </p>

            <div className="flex justify-center gap-6">
              {contactData.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={`Visit my ${social.icon} profile`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-gray-700 transition-all duration-300 bg-gray-100 border border-gray-300 group dark:bg-white/10 dark:border-white/20 rounded-xl dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500 dark:hover:border-blue-400 hover:scale-110"
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
