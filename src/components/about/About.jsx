import "./about.css";
import Technologies from "./Technologies";

const About = () => {
    return (
        <section className="section">
            <div className="container">
                <span className="section-label">About</span>
                <h2 className="section-title">About Me</h2>
                <div className="section-divider"></div>
                <p className="aboutBio">
                    Hello! I&apos;m Austin Aguilar — a Software Engineer at Oak Ridge
                    National Laboratory and an MSCS candidate at Georgia Tech specializing
                    in AI and LLM applications. I bridge the gap between research and
                    scalable, production-ready systems, motivated by building AI-driven
                    tools that are accessible and have real-world impact.
                </p>
                <Technologies />
            </div>
        </section>
    );
};

export default About;
