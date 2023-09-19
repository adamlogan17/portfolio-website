import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Tilt } from 'react-tilt'


export default function ProjectCard(props:ProjectCard) {
  return (
    <Tilt style={{ width: '300px', height: '490px', margin:'20px', backgroundColor:'aqua' }}>
      <Card style={{ width: '300px', height: '490px'}}>
        <CardActionArea href={props.projectUrl} target="_blank" sx={{
            textDecoration:'none', 
            height:'inherit',
            '&:hover': {
              color: "text.primary"
            }}}>
          <CardMedia
            component="img"
            height="300px"
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
    </Tilt>
  );
}