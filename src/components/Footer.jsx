import { motion } from "framer-motion";
import { footerData } from "../data/footerData";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const iconMap = {
  FaGithub: <FaGithub />,
  FaLinkedin: <FaLinkedin />,
  FaTwitter: <FaTwitter />,
  FaEnvelope: <FaEnvelope />,
  FaUpwork: <FaUpwork />,
};

const Footer = () => {
  const { theme } = useTheme();

  const bgClass =
    theme === "dark"
      ? "bg-black border-white/10"
      : "bg-gray-100 border-gray-200";

  const headingGradient =
    theme === "dark"
      ? "bg-gradient-to-b from-slate-900 to-slate-100"
      : "bg-gradient-to-br from-gray-400 via-blue-600 to-indigo-500";

  const textSecondary = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const textMuted = theme === "dark" ? "text-gray-500" : "text-gray-500";
  const linkHover =
    theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600";

  return (
    <footer className={`relative border-t overflow-hidden ${bgClass}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full top-1/2 left-1/2 w-96 h-96 mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 px-6 py-16 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-4">
            <h3
              className={`text-2xl font-bold ${headingGradient} bg-clip-text text-transparent`}
            >
              {footerData.name}
            </h3>
            <p className={`${textSecondary} leading-relaxed`}>
              {footerData.tagline}
            </p>
            <p className={`${textMuted} text-sm`}>{footerData.copyright}</p>
          </div>

          {/* Middle Column */}
          <div className="space-y-4">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`${textSecondary} ${linkHover} transition-colors duration-300 hover:translate-x-1 transform inline-block`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <h4 className="mb-4 text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4 mb-6">
              {footerData.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`group w-10 h-10 ${
                    theme === "dark"
                      ? "bg-white/5 border-white/20"
                      : "bg-gray-200 border-gray-300"
                  } backdrop-blur-sm border rounded-lg flex items-center justify-center ${textSecondary} hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-110`}
                  aria-label={social.platform}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>

            {/* <div className="space-y-2">
              <p className={`${textMuted} text-sm`}>Legal</p>
              <div className="flex flex-wrap gap-4">
                {footerData.legal.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`${textSecondary} ${linkHover} transition-colors duration-300 text-sm`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom border */}
        <div
          className={`mt-12 pt-8 border-t ${
            theme === "dark" ? "border-white/10" : "border-gray-300"
          }`}
        >
          <div className="text-center">
            <p className={`${textMuted} text-sm`}>
              Made with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
