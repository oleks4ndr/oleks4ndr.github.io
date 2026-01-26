export default function Navbar({ className = "" }) {
    return (
        <div className={className}>
            <nav className="flex flex-col justify-evenly text-right">
                <a href="#home">Me</a> {/* replace with image */}
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    )
}