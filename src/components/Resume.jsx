// src/components/Resume.jsx
import React from "react";
import { aboutData } from "../data/aboutData";
import {
  educationData,
  certificatesData,
  achievementsData,
} from "../data/educationData"; 
import { contactData } from "../data/contactData";
import { projectsData } from "../data/projectsData";

const Resume = () => {
  return (
    <div
      id="resume"
      className="max-w-4xl p-8 mx-auto font-sans text-gray-900 bg-white shadow-lg resume"
      style={{ fontSize: "14px", lineHeight: "1.5" }}
    >
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{aboutData.title}</h1>
        <img
          src={aboutData.image}
          alt="Khushi Kumari"
          className="object-cover w-24 h-24 mx-auto my-4 rounded-full"
        />
        <p className="max-w-2xl mx-auto mb-4">
          {aboutData.description.join(" ")}
        </p>
      </header>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="pb-1 mb-4 text-xl font-semibold border-b-2 border-gray-300">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {aboutData.skills.map((skill) => (
            <div key={skill.category}>
              <h3 className="font-semibold">{skill.category}</h3>
              <ul className="list-disc list-inside">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="pb-1 mb-4 text-xl font-semibold border-b-2 border-gray-300">
          Education
        </h2>
        {educationData.map((edu) => (
          <div key={edu.degree} className="mb-4">
            <h3 className="font-bold">{edu.degree}</h3>
            <p className="italic">{edu.institution}</p>
            <p>{edu.year}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </section>

      {/* Certificates */}
      <section className="mb-8">
        <h2 className="pb-1 mb-4 text-xl font-semibold border-b-2 border-gray-300">
          Certifications
        </h2>
        {certificatesData.map((cert) => (
          <div key={cert.title} className="mb-3">
            <h3 className="font-bold">{cert.title}</h3>
            <p className="italic">
              {cert.issuer} - {cert.year}
            </p>
            <p>{cert.description}</p>
            {cert.certificateLink && (
              <a
                href={cert.certificateLink}
                className="text-indigo-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </section>

      {/* Achievements (if any) */}
      {achievementsData.length > 0 && (
        <section className="mb-8">
          <h2 className="pb-1 mb-4 text-xl font-semibold border-b-2 border-gray-300">
            Achievements
          </h2>
          <ul className="list-disc list-inside">
            {achievementsData.map((ach, index) => (
              <li key={index}>{ach}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact */}
      <section className="mb-8">
        <h2 className="pb-1 mb-4 text-xl font-semibold border-b-2 border-gray-300">
          Contact
        </h2>
        <p>Email: {contactData.email}</p>
        <p>Phone: {contactData.phone}</p>
        <p>Location: {contactData.location}</p>
        <p>Availability: {contactData.availability}</p>
        <div className="flex mt-2 space-x-4">
          {contactData.social.map(({ platform, url }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              {platform}
            </a>
          ))}
        </div>
      </section>

      {/* Projects Summary */}
      <section>
        <h2 className="pb-1 mb-4 text-xl font-semibold border-b-2 border-gray-300">
          Projects Highlights
        </h2>
        <ul className="list-disc list-inside">
          {projectsData.projects.slice(0, 3).map((project) => (
            <li key={project.id} className="mb-2">
              <strong>{project.title}</strong>: {project.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Resume;
