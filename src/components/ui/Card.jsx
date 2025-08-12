import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Card = ({ children, className = "", hoverEffect = true, ...props }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -5,
              boxShadow:
                theme === "dark"
                  ? "0 10px 25px rgba(0,0,0,0.3)"
                  : "0 10px 25px rgba(0,0,0,0.1)",
            }
          : {}
      }
      className={`rounded-2xl overflow-hidden ${
        theme === "dark"
          ? "bg-white/5 backdrop-blur-sm border border-white/10"
          : "bg-white border border-gray-200"
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
