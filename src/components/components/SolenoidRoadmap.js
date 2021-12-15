import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/styles';
import { StepIcon } from '@mui/material';

const MyTypography = styled(Typography)({
  fontFamily: "Inter",
});

const MyStepLabel = styled(StepLabel)({
  color: '#C4C4C4',
  fontSize: '1.5em',
  marginRight: '20px',
  '& .Mui-active': {color: "#C4C4C4"},
  '& .Mui-disabled': {color: "#C4C4C4"},
  '& .Mui-completed': {color: "#C4C4C4"},

  background: "#FFF",
  border: "1px solid #9B51E0",
  "box-sizing": "border-box",
  "border-radius": "19px",
});

const MyStepIcon = styled(StepIcon)({
  color: '#C4C4C4',
  fontSize: '1.5em',
  '& .Mui-active': {color: "#D9AF2A"},
  '& .Mui-disabled': {color: "#C4C4C4"},
  '& .Mui-completed': {color: "#C4C4C4"},
});

const YellowStepIcon = styled(StepIcon)({
  color: '#D4AF37',
  fontSize: '1.5em',
  '& .Mui-active': {color: "#D4AF37"},
  '& .Mui-disabled': {color: "#D4AF37"},
  '& .Mui-completed': {color: "#D4AF37"},
});


const steps = [
  {
    label: 'Part I of the Solenoid Story Begins',
    description: `Once a Solenoid is born (minted), their journey creating energy throughout the Metaverse begins`,
    icon: MyStepIcon,
  },
  {
    label: 'Free Airdrops',
    description:
      'Reserved Solenoids will be airdropped to randomly selected holders. This collection included the rarest 1 of 1 Solenoids',
    icon: MyStepIcon,
  },
  {
    label: 'Distribution of 10 SOL',
    description: `To original minters who continue to hold Solenoids`,
    icon: MyStepIcon,
  },
  {
    label: 'Soledroids Release',
    description: `Are they friend or foe? That’s for the community to decide. The Soledroids represent a new set of characters that will be introduced within the Solenoid Metaverse. 
                  This will be a new drop where Solenoid holders will have priority. `,
    icon: YellowStepIcon,
  },
  {
    label: 'Building out Part II of the Solenoid Story',
    description: `Holders will have influence on the future of the Solenoid Story based on the number of Solenoids they hold.`,
    icon: MyStepIcon,
  },
  {
    label: 'Comic Book Creation',
    description: `Once Part II of our story is complete, we will begin creating a comic book to be distributed to the Solenoid Community. `,
    icon: MyStepIcon,
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
      
      <ul>
        {steps.map((step, index) => (
             <li key={step.label}>
               <span></span>
             <div className="roadmap">
                <div className="roadmap-label">{step.label}</div>
                <div className="roadmap-description">{step.description}</div>
              </div>
              {/*<div className="verticalLine"></div>*/}
              
            </li>

        ))}
      </ul>

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