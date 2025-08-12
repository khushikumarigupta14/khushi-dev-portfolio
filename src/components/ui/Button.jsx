import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Button = ({
  children,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) => {
  const { theme } = useTheme();

  const baseClasses =
    "font-medium rounded-xl flex items-center justify-center focus:outline-none transition-all duration-300 hover:scale-105 active:scale-95";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      theme === "dark"
        ? "bg-gradient-to-r from-primary-600 to-secondary-700 text-white shadow-lg hover:shadow-primary-600/25"
        : "bg-gradient-to-r from-primary-400 to-secondary-500 text-white shadow-lg hover:shadow-primary-400/25",
    secondary:
      theme === "dark"
        ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
        : "bg-black/5 border border-black/10 text-gray-900 hover:bg-black/10",
    ghost:
      theme === "dark"
        ? "text-gray-300 hover:text-white hover:bg-white/5"
        : "text-gray-700 hover:text-gray-900 hover:bg-black/5",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const iconClasses = {
    left: "flex-row",
    right: "flex-row-reverse",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${iconClasses[iconPosition]} ${className}`;

  const content = (
    <>
      {icon && (
        <span className={iconPosition === "left" ? "mr-2" : "ml-2"}>
          {icon}
        </span>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.95 }}
        className={combinedClasses}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
