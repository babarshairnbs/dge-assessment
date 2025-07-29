import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { useTranslation } from "react-i18next";

const FormStepper = (props) => {
  const { steps = [], activeStep = 0 } = props;
  const { t } = useTranslation();
  return (
    <Stepper activeStep={activeStep} sx={{ mt: 2, mb: 4 }}>
      {steps?.map((label, index) => (
        <Step key={`${label}-${index}`}>
          <StepLabel>{t(label)}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default FormStepper;
