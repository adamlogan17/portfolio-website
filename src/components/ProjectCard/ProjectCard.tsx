import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProjectCard(props:{title:string, img:any, text:string, projectUrl: string}) {
  return (
    <Card sx={{ width: '350px', height: '500px', padding:'0px', margin:'10px' }}>
      <CardActionArea href={props.projectUrl} target="_blank" sx={{
          textDecoration:'none', 
          height:'inherit',
          '&:hover': {
            color: "text.primary"
          }}}>
        <CardMedia
          component="img"
          height="350px"
          image={props.img.src}
          alt={props.img.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}