import githubLogo from "../../public/assets/githubIcon.svg";
import SocialLink from "../buttons/SocialLink";

export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col justify-center p-8">
      <h1 className="pb-4 text-center text-5xl lg:text-left lg:text-7xl">Oleksandr Anyshchenko</h1>
      <h3 className="text-md pb-2 text-center lg:text-left lg:text-2xl">
        Web and Software Engineer
      </h3>
      <h3 className="text-md pb-2 text-center lg:text-left lg:text-2xl">Abu Dhabi / Bratislava</h3>
      <ul>
        <li>
          <SocialLink
            className="inline-flex items-center justify-center"
            href="https://github.com/oleks4ndr"
            icon={githubLogo}
            label="GitHub"
            size="md"
          />
        </li>
      </ul>
    </section>
  );
}
