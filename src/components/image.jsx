import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedImage = ({ src, alt, className }) => {
  // Variants for the animation states
  const imageVariants = {
    hover: { scale: 0.9 }, // Scale the image up to 110% when hovered
    tap: { scale: 0.5 }   // Scale the image down to 90% when tapped (for touch devices)
  };

  return (
    <motion.img
      src={src}
      alt={alt}
      variants={imageVariants}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      transition={{ type: 'spring', stiffness: 200, }}
      className={className}
      style={{ display: 'block', maxWidth: '100%', margin: 'auto', }} // Basic styles for the image
    />
  );
};

AnimatedImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
}

export default AnimatedImage;