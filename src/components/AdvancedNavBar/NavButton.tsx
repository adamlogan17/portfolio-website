import * as React from "react";
import { SVGMotionProps, motion } from "framer-motion";
import { JSX } from "react/jsx-runtime";
import './NavButton.css';

// Defines the 
const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
  <motion.path
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

// Draws a hamburger menu when the navbar is closed and draws an 'x' when open
// Each path is a straight line on the svg, with the middle one becoming transparent when it is an x
export const NavButton = (props:{ toggle:() => void }) => (
  <button onClick={props.toggle} className="nav-button">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
