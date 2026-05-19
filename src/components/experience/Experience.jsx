import "./experience.css";


const experiences = [
    {
        title: "Software Engineer I",
        company: "Oak Ridge National Laboratory",
        location: "Oak Ridge, TN",
        time: "December 2024 - Present",
        description: "Majorly contributing to architecting scalable AI infrastructure and LLM applications for scientific workflows.",
    },
    {
        title: "Software Engineering Intern",
        company: "Oak Ridge National Laboratory",
        location: "Oak Ridge, TN",
        time: "May 2023 - December 2024",
        description: "Assisting in the ARM Data Center with software tooling and data pipeline development.",
    },
    {
        title: "Software Development Intern",
        company: "ITP Metrics",
        location: "Remote",
        time: "August 2023 - January 2024",
        description: "Participated in the development of a web application for psychological research.",
    },
    {
        title: "Undergraduate Research Assistant",
        company: "University of Memphis",
        location: "Memphis, TN",
        time: "September 2022 - December 2023",
        description: "Co-authored two papers on applying machine learning methods for the study of computational fluid mechanics.",
    },
];

const education = [
    {
        title: "M.S. Computer Science",
        company: "Georgia Institute of Technology",
        location: "Atlanta, GA (Remote)",
        time: "2024 - 2026",
        description: "Specialization in Artifical Intelligence.",
        courses: ["Knowledge-Based AI", "AI Ethics", "Machine Learning for Trading", "Data Analytics and Security"]
    },
    {
        title: "B.S. Mechanical Engineering, Minor in CS",
        company: "University of Memphis",
        location: "Memphis, TN",
        time: "2019 - 2023",
        description: "Graduated Magna Cum Laude with University Honors.",
        courses: ["Object-Oriented Programming and Data Structures","Discrete Structures", "Design and Analysis of Algorithms"]
    },

]
const Experience = () => (
    <section className="section">
        <div className="container">
            <h2 className="section-title">Career</h2>
            <div className="section-divider"></div>
            <div className="timeline">
                {experiences.map((exp) => (
                    <div key={exp.title} className="timelineItem">
                        <div className="timelineDot" />
                        <div className="timelineBody">
                            <h3 className="timelineTitle">{exp.title}</h3>
                            <p className="timelineCompany">
                                {exp.company} <span className="timelineLocation">· {exp.location}</span>
                            </p>
                            <p className="timelineDate">{exp.time}</p>
                            <p className="timelineDesc">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="exp-spacer"></div>
            <h2 className="section-title">Education</h2>
            <div className="section-divider"></div>
            <div className="timeline">
                {education.map((exp) => (
                    <div key={exp.title} className="timelineItem">
                        <div className="timelineDot" />
                        <div className="timelineBody">
                            <h3 className="timelineTitle">{exp.title}</h3>
                            <p className="timelineCompany">
                                {exp.company} <span className="timelineLocation">· {exp.location}</span>
                            </p>
                            <p className="timelineDate">{exp.time}</p>
                            <p className="timelineDesc">{exp.description}</p>
                            {exp.courses && (
                                <p className="timelineCourses">
                                    <strong>Notable Courses: </strong>
                                    {exp.courses.join(" · ")}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Experience;