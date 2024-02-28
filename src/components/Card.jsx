import PropTypes from 'prop-types';
import { transition, fadeIn } from '../data';
import { motion } from "framer-motion";

function Card({ title, description, icon }) {
  return (
    <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center gap-6 xl:justify-start"
          >
      <div className="p-16 bg-white shadow-2xl rounded-3xl" >
        <div className="block mb-4">
          <img 
          src={icon} 
          alt={title} 
          className="w-32 h-32 mx-auto mb-8 drop-shadow-2xl" />
          <div>
            <h3 className="text-xl font-bold text-center font-secondary text-fontGreen">{title}</h3>
          </div>
        </div>
        <p className="mb-4 text-lg text-center text-gray-600 ">{description}</p>
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any,
  description: PropTypes.string
}

export default Card;