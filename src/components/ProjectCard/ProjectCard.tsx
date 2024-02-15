import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProjectCard(props: ProjectCard) {
	return (
		<Card sx={{ width: '300px', height: '490px', padding: '0px', margin: '10px' }}>
			<CardActionArea
				href={props.projectUrl}
				target='_blank'
				sx={{
					textDecoration: 'none',
					height: 'inherit',
					'&:hover': {
						color: 'text.primary'
					}
				}}
			>
				<div
					style={{
						height: '290px',
						width: props.img.width !== undefined ? props.img.width : '',
						margin: 'auto',
						paddingTop: '10px'
					}}
				>
					<CardMedia component='img' image={props.img.src} alt={props.img.alt} />
				</div>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{props.title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{props.text}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
