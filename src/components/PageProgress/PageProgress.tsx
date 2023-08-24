import { motion, useScroll, useSpring } from "framer-motion";
import './PageProgress.css';

export default function PageProgress(props:{backgroundColor:string, originMiddle?:boolean }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div style={{
        scaleX,
        backgroundColor:props.backgroundColor,
        zIndex: '2',
        height: '5px'
      }} />

      {/* Keeping this here as, for some reason, I can't recreate the origin left progress bar using the new method */}
      {/* <motion.div className={`progress-bar-${props.position}`} style={{ scaleX, backgroundColor:props.backgroundColor }} /> */}
    </>
  );
}