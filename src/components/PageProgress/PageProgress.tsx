import { motion, useScroll, useSpring } from "framer-motion";
import './PageProgress.css';

export default function PageProgress(props:{backgroundColor:string, position:'top'|'bottom' }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className={`progress-bar-${props.position}`} style={{ scaleX, backgroundColor:props.backgroundColor }} />
    </>
  );
}