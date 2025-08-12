// FILE: src/components/SectionWrapper.jsx
const SectionWrapper = ({ id, children }) => {
  return (
    <section
      id={id}
      className="
        relative py-24 overflow-hidden 
        bg-gradient-to-b from-white to-gray-50 
        dark:from-slate-900 dark:to-slate-800
        transition-colors duration-500
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
