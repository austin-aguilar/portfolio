import PropTypes from 'prop-types';

const MyIcon = ({icon, caption}) => {

  
    return (
      <div >
          <i className="icon-class">{icon}</i> 
          <span>{caption}</span>
      </div>
    );
  };

  export default MyIcon

  MyIcon.propTypes = {
    icon: PropTypes.func,
    caption: PropTypes.string,
  };