import { motion } from "framer-motion";
import './MenuItem.css';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = (props:{ text:string, href:string }) => {
  return (
    <a href={props.href} style={{color:'inherit'}}>
      <motion.li className="nav-item"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
      <p>{props.text}</p>
    </motion.li>
    </a>
    
  );
};
