import { motion } from "framer-motion";
import { aboutData } from "../data/aboutData";
import { useTheme } from "../context/ThemeContext";
import Section from "./ui/Section";
import Card from "./ui/Card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  const { theme } = useTheme();

  return (
    <Section
      id="about"
      tagline="Get To Know Me"
      title={aboutData.title}
      background="contrast"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2"
      >
        {/* Text Section */}
        <motion.div className="space-y-6" variants={itemVariants}>
          {aboutData.description.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {paragraph}
            </p>
          ))}

          {/* Skills */}
          <div className="mt-12">
            <h3 className="mb-8 text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Skills & Expertise
            </h3>

            <div className="space-y-6">
              {aboutData.skills.map((skillCategory, index) => (
                <Card key={index} className="p-6">
                  <h4
                    className={`text-lg font-semibold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillCategory.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 text-sm font-medium text-blue-700 transition-colors duration-300 border border-blue-300 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:border-blue-500 dark:from-blue-500/20 dark:to-purple-500/20 dark:text-blue-200 dark:border-blue-500/30 dark:hover:border-blue-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
          {/* Stats */}
          <div className="mt-12">
            <h3 className="mb-8 text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              My Journey So Far
            </h3>
            <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
              {aboutData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 transition-colors duration-300 border border-gray-200 group rounded-xl dark:border-gray-700 hover:border-primary-400"
                >
                  <div className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white group-hover:text-primary-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 sm:text-base dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div className="relative" variants={itemVariants}>
          <div className="relative group">
            <div className="absolute inset-0 transition-opacity duration-500 opacity-25 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur group-hover:opacity-40"></div>
            <Card className="p-2">
              <img
                src={aboutData.image}
                alt="Profile"
                className="w-full transition-transform duration-500 shadow-2xl rounded-xl group-hover:scale-105"
              />
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default About;
