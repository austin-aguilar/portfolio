import "../card/Card.css";

import Card from '../card/GenCard.jsx';

const Education = () => {
    const schoolHistory = [
        {
            degree: "M.S. Computer Science",
            school: "Georgia Tech University",
            time: "2024 - 2026",
            description: "Online part time master's program with a concentration in machine learning."

        },
        {
            degree: "B.S. Mechanical Engineering with Minor in Computer Science",
            school: "University of Memphis",
            time: "2019 - 2023",
            description: "Graduated Magna Cum Laude with Honors.",
        }
    ]
    
    return (
        <div>

            <div className='container'>
                <h1>Education</h1>
                
                {
                    schoolHistory.map((edu) =>(
                        <Card
                            title={edu.degree}
                            company={edu.school}
                            time={edu.time}
                            description={edu.description}     
                        />
                    ))
                }

            </div>
        </div>

    ) }

    export default Education;