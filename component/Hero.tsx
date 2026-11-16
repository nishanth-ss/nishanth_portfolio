
import AnimatedPortrait from "./AnimatedPortrait";
import Reveal from "./Reveal";

const Hero = () => {
    return (
        <section id="home" className="bg-primary text-white min-h-screen flex items-center overflow-hidden">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-24 pb-12">

                {/* Left Side */}
                <Reveal className="hero-copy">
                    <p className="text-secondary text-lg md:text-xl font-semibold mb-3">
                        Hello, I'm
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Nishanth Sekar
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold mb-5">
                        Full Stack Developer
                    </h2>

                    <p className="text-gray-300 text-md md:text-xl leading-8 mb-8">
                        Full Stack Developer with 3 years of professional
                        experience building responsive web and mobile
                        applications using React.js, React Native,
                        Node.js, TypeScript, and MongoDB.
                    </p>
                    <p className="text-gray-300 text-md md:text-xl leading-8 mb-8">
                        Passionate about creating reusable UI components, integrating REST APIs and payment gateways, and developing scalable, user-friendly applications.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="rounded-lg bg-secondary px-6 py-3 transition-transform duration-300 hover:-translate-y-1">
                            View Projects
                        </a>

                        <a href="#contact" className="rounded-lg border border-secondary px-6 py-3 transition-colors duration-300 hover:bg-secondary">
                            Contact Me
                        </a>
                    </div>
                </Reveal>

                {/* Right Side */}
                <AnimatedPortrait />

            </div>
        </section>
    );
};

export default Hero;
