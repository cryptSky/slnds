import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/styles';
import { StepIcon } from '@mui/material';

const MyStepLabel = styled(StepLabel)({
  color: '#C4C4C4',
  fontSize: '1.5em',
  marginRight: '20px',
  '& .Mui-active': {color: "#C4C4C4"},
  '& .Mui-disabled': {color: "#C4C4C4"},
  '& .Mui-completed': {color: "#C4C4C4"},
});

const MyStepIcon = styled(StepIcon)({
  color: '#C4C4C4',
  fontSize: '1.5em',
  '& .Mui-active': {color: "#D9AF2A"},
  '& .Mui-disabled': {color: "#C4C4C4"},
  '& .Mui-completed': {color: "#C4C4C4"},
});

const steps = [
  {
    label: 'Part I of the Solenoid Story Begins',
    description: `Once a Solenoid is born (minted), their journey creating energy throughout the Metaverse begins`,
  },
  {
    label: 'Free Airdrops',
    description:
      'Reserved Solenoids will be airdropped to randomly selected holders. This collection included the rarest 1 of 1 Solenoids',
  },
  {
    label: 'Distribution of 10 SOL',
    description: `To original minters who continue to hold Solenoids`,
  },
  {
    label: 'Soledroids Release',
    description: `Are they friend or foe? That’s for the community to decide. The Soledroids represent a new set of characters that will be introduced within the Solenoid Metaverse. 
                  This will be a new drop where Solenoid holders will have priority. `,
  },
  {
    label: 'Building out Part II of the Solenoid Story',
    description: `Holders will have influence on the future of the Solenoid Story based on the number of Solenoids they hold.`,
  },
  {
    label: 'Comic Book Creation',
    description: `Once Part II of our story is complete, we will begin creating a comic book to be distributed to the Solenoid Community. `,
  },
];

function SolenoidRoadmap() {
  /*const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  }; */

  return (
    <Box>
      <Stepper activeStep={0} orientation="vertical" connector={false} >
        {steps.map((step, index) => (
          <Step key={step.label} expanded sx={{mb: 2}}>
            <MyStepLabel
              StepIconComponent={MyStepIcon}
              icon=" "
            >
              <Typography fontSize="1.5em" marginLeft="1em">{step.label}</Typography>
            </MyStepLabel>
            <StepContent>
              <Typography marginLeft="2em">{step.description}</Typography>
              <Box sx={{ mb: 2 }}>

              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default SolenoidRoadmap;

/*
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
*/