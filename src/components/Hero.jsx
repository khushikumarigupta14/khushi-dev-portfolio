import { motion } from "framer-motion";
import { heroData } from "../data/heroData";
import Button from "./ui/Button";
import Section from "./ui/Section";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <Section
      id="hero"
      tagline="Now Available"
      title={heroData.title}
      background="default"
    >
      <motion.div initial="hidden" animate="visible" className="text-center">
        {/* Subtitle */}
        <motion.h2
          custom={0.3}
          variants={fadeUp}
          className="max-w-3xl mx-auto mb-6 text-lg font-light sm:text-2xl lg:text-3xl text-primary-600 dark:text-primary-300"
        >
          {heroData.subtitle}
        </motion.h2>

        {/* Description */}
        <motion.p
          custom={0.4}
          variants={fadeUp}
          className="max-w-4xl mx-auto mb-8 text-base leading-relaxed text-gray-600 sm:text-lg sm:mb-12 dark:text-gray-300"
        >
          {heroData.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-4 mb-10 sm:flex-row sm:mb-16"
        >
          <Button
            href={heroData.cta.primary.link}
            variant="primary"
            size="lg"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            }
          >
            {heroData.cta.primary.text}
          </Button>

          <Button
            href={heroData.cta.secondary.link}
            variant="secondary"
            size="lg"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5v1M9 10a2.5 2.5 0 000 5h1.5a1.5 1.5 0 001.5-1.5v-1"
                />
              </svg>
            }
          >
            {heroData.cta.secondary.text}
          </Button>
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          custom={0.6}
          variants={fadeUp}
          className="grid max-w-4xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3 sm:gap-8"
        >
          {heroData.stats.map((stat, index) => (
            <div key={index} className="text-center group" role="status">
              <div className="mb-1 text-2xl font-bold text-gray-900 transition-colors duration-300 sm:text-4xl dark:text-white group-hover:text-primary-500">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-500 sm:text-base dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </motion.div>
    </Section>
  );
};

export default Hero;
