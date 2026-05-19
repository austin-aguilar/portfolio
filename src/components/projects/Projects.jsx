import "./projects.css";

const projects = [
    {
        title: "Recommendation System",
        description: "Developed a machine learning pipeline to recommend atmospheric datasets to users using clustering and NLP.",
        tools: ["Python", "PostgreSQL", "Scikit-Learn", "Hugging Face"],
        projectLink: "https://www.linkedin.com/in/austinaguilarmecs/overlay/1635535273267/single-media-viewer/?profileId=ACoAAC3bjGMBLV5HLAbqU2Q6ZrYvXfjxwmzS40w",
    },
];

const Projects = () => (
    <section className="section projectsSection">
        <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="section-divider"></div>
            <div className="projectsGrid">
                {projects.map((p) => (
                    <div key={p.title} className="projectCard">
                        <div className="projectCardBody">
                            <h3 className="projectTitle">{p.title}</h3>
                            <p className="projectDesc">{p.description}</p>
                            <div className="projectTools">
                                {p.tools.map(t => (
                                    <span key={t} className="toolTag">{t}</span>
                                ))}
                            </div>
                            {p.projectLink && (
                                <a href={p.projectLink} target="_blank" rel="noreferrer" className="projectLink">
                                    View Project →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;