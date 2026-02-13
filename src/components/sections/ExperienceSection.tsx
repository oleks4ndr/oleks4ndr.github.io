import ExperienceEntry from "../experience/ExperienceEntry";
import OsmAndLogo from "../../public/assets/OsmAndLogo.png";

export default function ExperienceSection() {
  return (
    <section id="experience" className="flex flex-col p-8">
      <h2 className="text-center text-4xl lg:text-left">Experience</h2>
      <div className="relative mt-2 h-px w-full bg-radial from-gray-600 to-[#00000000] lg:bg-linear-to-r"></div>

      <ExperienceEntry
        position="Frontend Engineer"
        company="Acme Labs"
        dateFrom={new Date(2023, 5, 1)} // Jun 2023 (months are 0-indexed)
        dateTo="Present"
        logo={OsmAndLogo}
        bulletPoints={[
          "Built and shipped a design system in React + Tailwind, reducing UI inconsistencies across the app.",
          "Improved Core Web Vitals by optimizing images and bundle splitting, cutting LCP by ~30%.",
          "Owned a feature from discovery to release: analytics dashboards with role-based access.",
        ]}
      />

      <ExperienceEntry
        position="Software Engineering Intern"
        company="Nova Robotics"
        dateFrom={new Date(2022, 4, 1)} // May 2022
        dateTo={new Date(2022, 7, 1)} // Aug 2022
        // no logo provided
        bulletPoints={[
          "Prototyped internal tooling to visualize telemetry, saving engineers time during debugging.",
          "Wrote integration tests and CI checks to reduce regressions in weekly releases.",
        ]}
      />
    </section>
  );
}
