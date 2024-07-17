import PropTypes from 'prop-types';
import './Card.css'

const Card = (props) =>{
    const { title, company, time, description, imageUrl, tools, projectLink } = props;
    return(
        <div className='genCard'>
            {imageUrl && (<img src={imageUrl} alt={title}/>)}
            <div className='genCardBody'>
                <h3>{title}</h3>
                {company && (<p>{company}</p>)}
                {time && (<p>{time}</p>)}
                <p>{description}</p>
                {tools && (<p style={{marginTop: 10}}><b>Tech Used:</b> {tools}</p>)}
                {projectLink && (
                    <div className='Btn' style={{ padding: 5,marginTop: 10, marginBottom: 10, display:'flex', justifyContent: 'center', width: '150px' }}>
                        <a href={projectLink}> View Project</a>
                    </div>
                )}
            </div> 
        </div>
    )
}

  export default Card

  Card.propTypes = {
    title: PropTypes.string,
    company: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    tools: PropTypes.string,
    projectLink: PropTypes.string,
  }