import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";
import { projectsData } from "../../data/projectsData";

describe("ProjectCard", () => {
  const project = projectsData[0];

  it("renders project information", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    project.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it("contains links to code and live demo", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByText("Code").closest("a")).toHaveAttribute(
      "href",
      project.links.code
    );
    expect(screen.getByText("Live Demo").closest("a")).toHaveAttribute(
      "href",
      project.links.live
    );
  });
});
