import githubIcon from "../../public/assets/githubIcon.png";
import linkedinIcon from "../../public/assets/linkedinIcon.png";
import SocialLink from "../buttons/SocialLink";

const socials = [
  { label: "GitHub", href: "https://github.com/oleks4ndr", icon: githubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/anyshchenko", icon: linkedinIcon },
];

export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col justify-center p-8">
      <h1 className="pb-4 text-center text-5xl lg:text-left lg:text-7xl">Oleksandr Anyshchenko</h1>
      <h3 className="text-md pb-2 text-center lg:text-left lg:text-2xl">
        Web and Software Engineer
      </h3>
      <h3 className="text-md pb-4 text-center lg:text-left lg:text-2xl">Abu Dhabi / Bratislava</h3>
      <ul className="flex items-center justify-center gap-4 lg:justify-start">
        {socials.map(({ label, href, icon }) => (
          <li key={label} className="inline-flex">
            <SocialLink
              className="relative inline-block h-[clamp(48px,5vw,64px)] w-[clamp(48px,5vw,64px)] transition-transform duration-200 hover:scale-105"
              href={href}
              icon={icon}
              label={label}
              size="md"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
