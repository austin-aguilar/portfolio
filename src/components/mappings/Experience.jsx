import "../card/Card.css";

import Card from '../card/GenCard.jsx';

const experience = () => {
    const experiences = [
        {
            title:"Software Development Intern",
            company: "Oak Ridge National Laboratory; Oak Ridge, TN",
            time:"May 2023-July 2023, January 2024 - Present",
            description: "Assisting in the ARM Data Center"
        },
        {
            title:"Software Developement Intern",
            company: "ITP Metrics; Remote",
            time:"August 2023 - January 2024",
            description: "Participated in the development of a web application for psychological research."
        },
        {
            title:"Undergraduate Research Assistant",
            company: "University of Memphis; Memphis, TN",
            time: "September 2022 - December 2023",
            description: "Co-authored two papers on applying machine learning methods for study of computational fluid mechanics. "
        },
        {
            title: "B.S. Mechanical Engineering, Minor in Computer Science",
            company: "University of Memphis",
            time: "2019-2023",
            description: "Graduated Magna Cum Laude with University Honors"
        }
    ]
    
    return (
        <div>

            <div className='container'>
                <h1>My Journey</h1> 
                {
                    experiences.map((job) =>(
                        <Card
                            title={job.title}
                            company={job.company}
                            time={job.time}
                            description={job.description}     
                        />
                    ))
                }

            </div>
        </div>

    )
}

export default experience;