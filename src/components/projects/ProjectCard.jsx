import PropTypes from 'prop-types';

const Card = (props) =>{
    const { title, description, imageUrl, tools, projectLink } = props;
    return(
        <div className='projectCard'>
            <img src={imageUrl} alt={title}/>
            <div className='projectCardBody'>
                <h3>{title}</h3>
                <p>{description}</p>
                <p style={{marginTop: 10}}><b>Tech Used:</b> {tools}</p>
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
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    tools: PropTypes.func,
    projectLink: PropTypes.string,
  }