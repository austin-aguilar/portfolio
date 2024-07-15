import "./resume.css";

const resume = () => {
    return (
        <div className="container">
            <h1 className='header'>Resume</h1>
            <div className="resumeContainer">
                <iframe className="resumePdf" src='src/assets/aguilar-resume-summer24.pdf' width="80%" height="100%"/>
            </div>
        </div>
 
    )
}

export default resume;