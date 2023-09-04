import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function EducationCard() {
  return (
      <Timeline align="alternate">

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2017 - 2021</Typography>
            <Typography color="textSecondary">Sydney, Australia</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent height="200px">
            <Typography>THE UNIVERSITY OF SYDNEY</Typography>
            <Typography>Ph.D. in Computer Science</Typography>
            <Link href="https://ses.library.usyd.edu.au/handle/2123/24091" color="inherit">
              {'Thesis'}
            </Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2013 - 2016</Typography>
            <Typography color="textSecondary">Dhahran, Saudi Arabia</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent height="200px">
            <Typography>KFUPM</Typography>
            <Typography>M.Sc. in Computer Science</Typography>
            <Link href="http://eprints.kfupm.edu.sa/139756/" color="inherit">
              {'Thesis'}
            </Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2005 - 2010</Typography>
            <Typography color="textSecondary">Hail, Saudi Arabia</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />            
          </TimelineSeparator>
          <TimelineContent height="200px">
            <Typography>UNIVERSITY OF HAIL</Typography>
            <Typography>B.Sc. in Computer Science</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
  );
}
