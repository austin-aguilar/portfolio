import { useState } from 'react';
import PropTypes from 'prop-types';

const MyIcon = ({icon, caption}) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  
    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <i className="icon-class"></i> {icon}
        {isHovered && (
          <div style={{ display: 'inline', position: 'absolute' }}>
            {caption}
          </div>
        )}
      </div>
    );
  };

  export default MyIcon

  MyIcon.propTypes = {
    icon: PropTypes.func,
    caption: PropTypes.string,
  };