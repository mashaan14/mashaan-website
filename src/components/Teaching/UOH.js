import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    code: 'CSAI510',
    title: 'Machine Learning for Big Data',
    description: `I taught this course to master students. In this course, students learn about machine learning in big data context.`,
  },
  {
    code: 'ICS434',
    title: 'Advanced Database Systems',
    description:
      'I taught this course to undergraduate students This course exposes students to advanced database concepts such as transaction processing and concurrency control techniques.',
  },   
  {
    code: 'ICS202',
    title: 'Data Structures and Algorithms',
    description:
      'I taught this course to undergraduate students, I usually had 80 enrolled students per semester. This course exposes students to advanced object-oriented programming and different types of data structures.',
  }, 
  {
    code: 'ICS381',
    title: 'Principles of Artificial Intelligence',
    description:
      'I redesigned the teaching material for this course and taught it to undergraduates. In this course, students learn the principles of artificial intelligence with topics such as constraint satisfaction and adversarial search.',
  },
  {
    code: 'COE200',
    title: 'Fundamentals of Computer Engineering',
    description:
      'I taught this course to undergraduate students. This course introduces students to the fundamentals of computer engineering, which include topics like digital circuits, boolean algebra, and sequential circuit design.',
  },  
];

export default function UOH() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, border: 1, borderColor: '#4B668C', bgcolor: '#EDEFF3'}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'left',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography variant="body1" fontWeight="bold">{steps[activeStep].code}</Typography>
      </Paper>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'left',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography variant="body1" color="#4B668C">{steps[activeStep].title}</Typography>
      </Paper>      
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2, textAlign: 'left'}}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
