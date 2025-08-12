import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Section = ({
  id,
  title,
  subtitle,
  tagline,
  children,
  className = "",
  background = "default",
  ...props
}) => {
  const { theme } = useTheme();

  const backgroundClasses = {
    default:
      theme === "dark"
        ? "bg-gradient-to-b from-slate-900 to-slate-800"
        : "bg-gradient-to-br from-white via-blue-50 to-indigo-50",
    contrast:
      theme === "dark"
        ? "bg-gradient-to-b from-slate-800 to-black"
        : "bg-gradient-to-b from-white to-gray-100",
    primary:
      theme === "dark"
        ? "bg-gradient-to-br from-primary-600 to-secondary-700"
        : "bg-gradient-to-br from-primary-400 to-secondary-500",
  };

  return (
    <section
      id={id}
      className={`relative py-20 overflow-hidden ${backgroundClasses[background]} ${className}`}
      {...props}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {(title || subtitle || tagline) && (
          <div className="text-center mb-16">
            {tagline && (
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm border text-sm font-medium mb-8
                ${
                  theme === "dark"
                    ? "bg-green-500/10 border-green-500/20 text-green-300"
                    : "bg-green-100 border border-green-300 text-green-800 "
                }`}
              >
                <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse" />
                {tagline}
              </div>
            )}

            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span
                  className={`bg-clip-text text-transparent ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-green-300 via-blue-400 to-cyan-300"
                      : "bg-gradient-to-r from-green-600 via-blue-500 to-cyan-600"
                  }`}
                >
                  {title}
                </span>
              </h2>
            )}

            {subtitle && (
              <p
                className={`text-lg sm:text-xl max-w-3xl mx-auto ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default Section;
