import "./resume.css";

const resume = () => {
    return (
        <div className="container">
            <h1 className='header'>Resume</h1>
            <div className="resumeContainer">
                <iframe className="resumePdf" src='src/assets/resume_spr_24pdf.pdf' width="80%" height="100%"/>
            </div>
        </div>
 
    )
}

export default resume;