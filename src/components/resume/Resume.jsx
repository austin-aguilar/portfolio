import "./resume.css";

const resume = () => {
    return (
        <div className="resumeContainer">
            <iframe className="resumePdf" src='src/assets/resume_spr_24pdf.pdf' width="80%" height="100%"/>
        </div>
    )
}

export default resume;