import { motion } from "framer-motion";
import Section from "./ui/Section"; // Import your Section wrapper
import {
  educationData,
  achievementsData,
  certificatesData,
} from "../data/educationData";
const EducationCertificatesAchievements = () => {
  return (
    <Section
      id="education"
      title="Education, Certificates & Achievements"
      subtitle="Here you will find my academic background, certifications earned, and key achievements."
      tagline="Background"
      background="contrast"
    >
      <div className="p-8 space-y-12 border bg-white/5 dark:bg-white/5 backdrop-blur-sm border-black/10 dark:border-white/10 rounded-2xl md:p-12">
        {/* Education */}
        <section>
          <h3 className="pb-2 mb-6 text-2xl font-semibold border-b border-green-500/30 dark:text-white hover:dark:text-gray-200 ">
            Education
          </h3>
          <ul className="space-y-6">
            {educationData.map(
              ({ degree, institution, year, details }, idx) => (
                <li key={idx} className="space-y-1">
                  <h4 className="text-lg font-semibold dark:text-white hover:dark:text-gray-200">
                    {degree}
                  </h4>
                  <p className="font-medium text-green-500 dark:text-green-400">
                    {institution} | {year}
                  </p>
                  {details && (
                    <p className="text-gray-600 dark:text-gray-400">
                      {details}
                    </p>
                  )}
                </li>
              )
            )}
          </ul>
        </section>

        {/* Certificates */}
        <section>
          <h3 className="pb-2 mb-6 text-2xl font-semibold border-b border-green-500/30 dark:text-white hover:dark:text-gray-200">
            Certificates
          </h3>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            {certificatesData.map(({ title, issuer, year }, idx) => (
              <li key={idx}>
                <p>
                  <span className="font-semibold text-black dark:text-white">
                    {title}
                  </span>{" "}
                  - {issuer} ({year})
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        {/* <section>
          <h3 className="pb-2 mb-6 text-2xl font-semibold border-b border-green-500/30 dark:text-white hover:dark:text-gray-200">
            Achievements
          </h3>
          <ul className="space-y-2 text-gray-600 list-disc list-inside dark:text-gray-300">
            {achievementsData.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </section> */}
      </div>
    </Section>
  );
};

export default EducationCertificatesAchievements;
