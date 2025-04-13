import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../../utils/cn';
import ProjectCard from '../ProjectCard/ProjectCard';

{
	/* <ProjectCard
key={key}
title={project.title}
text={project.text}
img={project.img}
projectUrl={project.projectUrl}
/> */
}

export default function ProjectGrouping(props: { cards: ProjectCard[]; className?: string }) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className={cn('grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10', props.className)}>
			{props.cards.map((card, idx) => (
				<div
					// href={card.projectUrl}
					key={idx}
					className='relative group block p-2 h-full w-full'
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className='absolute inset-0 h-full w-full bg-neutral-300 dark:bg-slate-900/[1] block rounded-3xl'
								layoutId='hoverBackground'
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 }
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 }
								}}
                style={{ zIndex: 2 }}
							/>
						)}
					</AnimatePresence>
					<ProjectCard title={card.title} text={card.text} img={card.img} projectUrl={card.projectUrl} />
				</div>
			))}
		</div>
	);
}
