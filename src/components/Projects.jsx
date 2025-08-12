import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "./ui/SectionWrapper";
import Section from "./ui/Section";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <Section
      id="projects"
      title={projectsData.title}
      subtitle={projectsData.subtitle}
      tagline="Portfolio"
      background="default"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectsData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
