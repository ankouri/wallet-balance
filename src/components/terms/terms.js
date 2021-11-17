import React from "react";
import {
  Step,
  Stepper,
  Divider,
  StepLabel,
  Button,
  StepContent,
  Typography,
  Box,
} from "@mui/material";
import { TermsAndServices } from "../../constants";
import moment from "moment";
import { style } from './terms-style';

export default function Terms() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <style.Wrapper>
      <style.Vector src="/terms.svg" alt="" />
      <style.Info>
        <style.InfoTitle>Terms & Services</style.InfoTitle>
        <Divider />
        <style.TermsLine>
          Please read these terms of service ("terms", "terms of service")
          carefully before using [website] website (the "service") operated by
          [name] ("us", 'we", "our").
        </style.TermsLine>
        <h5>Last Update : {moment().format("L")}</h5>
        <Stepper activeStep={activeStep} orientation="vertical">
          {TermsAndServices.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={<Typography variant="caption">{ step.subTile }</Typography>}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === TermsAndServices.length - 1
                        ? "Finish"
                        : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </style.Info>
    </style.Wrapper>
  );
}




