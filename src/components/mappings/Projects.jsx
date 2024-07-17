import Card from '../card/GenCard';

const Projects = () => {
    return (
        <div className='container'>
            <h1> Projects</h1>
            <div>
                <Card 
                    title='Recommendation System'
                    description='Developed a machine learning pipeline to recommend atmospheric datasets to users using clustering and NLP.'
                    imageUrl='https://cdn-icons-png.flaticon.com/512/992/992846.png'
                    tools = 'Python, PostGresSQL, Scikit-Learn, Hugging Face.'
                    projectLink='https://www.linkedin.com/in/austinaguilarmecs/overlay/1635535273267/single-media-viewer/?profileId=ACoAAC3bjGMBLV5HLAbqU2Q6ZrYvXfjxwmzS40w'/>
            </div>
        </div>

    )
}

export default Projects;