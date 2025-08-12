import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="overflow-hidden transition-all duration-500 border shadow-lg  border-white/30 dark:border-white/20 bg-white/20 dark:bg-gray-900/30 backdrop-blur-md rounded-2xl hover:bg-white/30 dark:hover:bg-gray-900/50 hover:scale-105"
    >
      <div className="relative overflow-hidden">
        <img
          src={
            project.image ||
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          }
          alt={project.title}
          className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"></div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-600 transition-colors duration-300 dark:text-white group-hover:text-blue-300">
          {project.title}
        </h3>
        <p className="mb-4 leading-relaxed text-gray-500">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm font-medium text-blue-500 border rounded-full bg-blue-500/20 border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-gray-400 transition-colors duration-300 hover:text-white"
          >
            <FiGithub /> Code
          </a>
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
