import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Link} from 'react-scroll';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

  backgroundColor: '#333333',
  //border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: "#C4C4C4" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#333333',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  //borderTop: '1px solid rgba(172, 140, 37, .125)',
  backgroundColor: '#333333',
}));

const MyTypography = styled(Typography)({
  fontFamily: "Avenir Next",
});

export default function SolenoidFAQ() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <MyTypography color="#C4C4C4;" fontSize="1.5rem;">How many Solenoids are available to be minted?</MyTypography>
        </AccordionSummary>
        <AccordionDetails>
          <MyTypography color="#a2a2a2;" marginLeft="2em" fontSize="1.2rem;" >
          There will only ever be 3,333 Solenoids that can be minted
          </MyTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <MyTypography color="#C4C4C4;"  fontSize="1.5rem;">When can you mint a Solenoid?</MyTypography>
        </AccordionSummary>
        <AccordionDetails>
          <MyTypography color="#a2a2a2;" marginLeft="2em" fontSize="1.2rem;" >
          You can only mint a Solenoid through our website link. Do not trust any links that are not from the Solenoid website (<Link to="top" spy={true} smooth={true} className="link-primary">http://solenoid.io/</Link>)
          </MyTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <MyTypography color="#C4C4C4;"  fontSize="1.5rem;">How to mint a Solenoid?</MyTypography>
        </AccordionSummary>
        <AccordionDetails>
          <MyTypography color="#a2a2a2;" marginLeft="2em" fontSize="1.2rem;" >
          Click the Mint button located and the website and follow the associated instructions
          </MyTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <MyTypography color="#C4C4C4;"  fontSize="1.5rem;">How many Solenoids can I mint in one transaction?</MyTypography>
        </AccordionSummary>
        <AccordionDetails>
          <MyTypography color="#a2a2a2;" marginLeft="2em" fontSize="1.2rem;" >
          There is no limit to the number of Solenoids you are able to mint 
          </MyTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <MyTypography color="#C4C4C4;"  fontSize="1.5rem;">What is the price of minting a Solenoid?</MyTypography>
        </AccordionSummary>
        <AccordionDetails>
          <MyTypography color="#a2a2a2;" marginLeft="2em" fontSize="1.2rem;" >
          Each Solenoid will mint for 1 SOL 
          </MyTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <MyTypography color="#C4C4C4;"  fontSize="1.5rem;">How do I tell how rare my Solenoid is?</MyTypography>
        </AccordionSummary>
        <AccordionDetails>
          <MyTypography color="#a2a2a2;" marginLeft="2em" fontSize="1.2rem;"  fontSize="1.5rem;">
          Rarity will be released after mint. Check the discord for updates.
          </MyTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <MyTypography color="#C4C4C4;"  fontSize="1.5rem;">Where can I buy a Solenoid after the mint is over?</MyTypography>
        </AccordionSummary>
        <AccordionDetails>
          <MyTypography color="#a2a2a2;" marginLeft="2em" fontSize="1.2rem;" >
          Solenoids can be bought on <a href="https://solanart.io" className="link-primary">solanart.io</a> after the minting process is completed  
          </MyTypography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
