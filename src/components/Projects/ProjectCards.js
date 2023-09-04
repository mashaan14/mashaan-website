import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ResearchCard(props) {
  return (
    <Card sx={{ minWidth: 275, minHeight: 275 }} className="project-card-view">
      <CardMedia
        sx={{paddingTop: props.size}}
        image={props.imgPath}
        title={props.imgTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="left">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
      {props.Button1Text && (
        <Button
          size="small"
          href={props.Button1Link}
        >
          {props.Button1Text}          
        </Button>
        )}
        {props.Button2Text && (
        <Button
          size="small"
          href={props.Button2Link}
        >
          {props.Button2Text}          
        </Button>
        )}
        {props.Button3Text && (
        <Button
          size="small"
          href={props.Button3Link}
        >
          {props.Button3Text}          
        </Button>
        )}
      </CardActions>
    </Card>
  );
}
