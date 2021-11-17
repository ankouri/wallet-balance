import React from "react";
import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { FAQ } from '../../constants';

export default function HowTo() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div  style={{marginBottom:'60px'}}>
      {
        FAQ.map((item, key) => {
          return <Accordion
          key={`panel${key}`}
          expanded={expanded === `panel${key}`}
          onChange={handleChange(`panel${key}`)}
         
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`panel${key}bh-content`}
            id={`panel${key}bh-header`}
          >
            <Typography sx={{ width: "66%", flexShrink: 0 }}>
              { item.title }
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            { item.description }
            </Typography>
          </AccordionDetails>
        </Accordion>
        })
      }
    </div>
  );
}
