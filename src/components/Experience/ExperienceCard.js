import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Experiencecard(props) {
  return (
    <Paper className="Experience-card-view"
      sx={{
        p: 2,
        margin: 'auto',
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={props.imgPath}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
            <Grid item xs={8}>
              <Typography gutterBottom variant="subtitle1" component="div" align="left">
                {props.title}
              </Typography>
              <Typography variant="body2" gutterBottom align="left">
                {props.location}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" component="div">
                {props.time}
              </Typography>
            </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary" align="left">
              {props.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>        
  );
}