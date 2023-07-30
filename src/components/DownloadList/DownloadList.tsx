import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Link from '@mui/material/Link';

export default function DownloadList(props:{items:any[]}) {
  return (
    <List>
      {props.items.map((item:any, key:number) => 
        <Link key={key} href={item.download} sx={{
          textDecoration:'none', 
          '&:hover': {
            color: "text.primary"
          }}} target="_blank" download>
          <ListItemButton divider={key !== props.items.length-1 }>
            <ListItemAvatar>
              <Avatar sx={{backgroundColor:item.avatar.background}} alt={item.avatar.alt} src={item.avatar.src} imgProps={{sx: item.avatar.imgStyle}}/>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.about} />
          </ListItemButton>
        </Link>
      )}
    </List>
  );
}
