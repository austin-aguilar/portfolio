import "./projects.css";

import Card from './ProjectCard.jsx';

const projects = () => {
    return (
        <div className='container'>
            <h1 className ='header'> Projects</h1>
            <div className='cardContainer'>
                <Card 
                    title='Recommendation System'
                    description='Developed a machine learning pipeline to recommend atmospheric datasets to users using clustering and NLP.'
                    imageUrl='https://media.licdn.com/dms/image/D4E2DAQHy574PZORX8g/profile-treasury-document-cover-images_480/0/1691174912988?e=1713798000&v=beta&t=FaV9R-APRu5ZqIcKRfd5eLlSsRw07NSptHs3jqR-oIk'
                    tools = 'Python, PostGresSQL, Scikit-Learn, Hugging Face.'
                    projectLink='https://www.linkedin.com/in/austinaguilarmecs/overlay/1635535273267/single-media-viewer/?profileId=ACoAAC3bjGMBLV5HLAbqU2Q6ZrYvXfjxwmzS40w'/>
            </div>
        </div>

    )
}

export default projects;