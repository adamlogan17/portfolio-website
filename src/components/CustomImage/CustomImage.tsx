import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';

/**
 * TODO investigate the particle image https://reactjsexample.com/render-images-as-interactive-particles-with-react/
 */
export default function CustomImage(props: Image) {
	let mediaTrigger = useMediaQuery('(max-width: 1150px)');
	mediaTrigger = props.resizeOnSmallScreen === undefined ? mediaTrigger : props.resizeOnSmallScreen;

	const style = props.imageStyle || {
		width: mediaTrigger ? '100%' : props.width === undefined ? '95%' : props.width,
		borderRadius: '5%',
		boxShadow: props.boxShadow || props.boxShadow === undefined ? '0 0 10px rgba(0,0,0,0.5)' : 'none'
	};

	return (
		<figure>
			<motion.img whileHover={{ scale: 1.05 }} src={props.src} alt={props.alt} style={style} />
		</figure>
	);
}
