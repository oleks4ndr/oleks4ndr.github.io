import ProjectCard from "../projects/ProjectCard";
import localWorksImg from "../../public/assets/localworks.png";

export default function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col p-8">
      <h2 className="text-center text-4xl lg:text-left">Featured Projects</h2>
      <div className="relative mt-2 h-px w-full bg-radial from-gray-600 to-[#00000000] lg:bg-linear-to-r" />

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="LocalWorks"
          image={localWorksImg}
          summary="A web application that connects homeowners and property managers with local tradespeople and service professionals."
          stack={["React", "MongoDB", "Node/Express"]}
          links={[
            { label: "Live", href: "https://example.com" },
            { label: "GitHub", href: "https://github.com/yourname/localworks" },
          ]}
        />

        {/* placeholders for now*/}
        <ProjectCard
          title="Project Two"
          summary="Short description of project two."
          stack={["Next.js", "TypeScript", "Tailwind"]}
          links={[{ label: "GitHub", href: "https://github.com/yourname/project-two" }]}
        />

        <ProjectCard
          title="Project Three"
          summary="Short description of project three."
          stack={["React", "PostgreSQL"]}
          links={[{ label: "Case Study", href: "https://example.com/case-study" }]}
        />
      </div>
    </section>
  );
}
