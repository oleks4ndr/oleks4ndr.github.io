// import githubLogo from '../../public/assets/github.svg';
// import SocialLink from '../buttons/SocialLink';

export default function HeroSection() {
    return (
        <section id="home" className="flex flex-col min-h-screen justify-center border border-solid border-amber-400">
            <h1>Fname Lname</h1>
            <h2>Software Engineer</h2>
            <h2>Location</h2>
            <ul>
                {/* <SocialLink href="https://github.com/oleks4ndr" icon={githubLogo} altText="GitHub" /> */}
            </ul>
        </section>
    );
}