// import githubLogo from '../../public/assets/github.svg';
// import SocialLink from '../buttons/SocialLink';

export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col justify-center p-8">
      <h1 className="pb-4 text-center text-5xl lg:text-left lg:text-7xl">Oleksandr Anyshchenko</h1>
      <h3 className="pb-2 text-2xl">Web and Software Engineer</h3>
      <h3 className="text-2xl">Abu Dhabi / Bratislava</h3>
      <ul>
        {/* <SocialLink href="https://github.com/oleks4ndr" icon={githubLogo} altText="GitHub" /> */}
      </ul>
    </section>
  );
}
