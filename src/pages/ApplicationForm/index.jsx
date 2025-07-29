import { Box, Container, Paper } from "@mui/material";
import { useCallback, useState } from "react";
import FormStepper from "../../components/Stepper";
import { GLOBAL_CONSTANTS } from "../../constants";
import PersonalInfo from "./PersonalInfo";
import FamilyFinancialInfo from "./FamilyFinancialInfo";
import SituationDescription from "./SituationDesc";

function ApplicationForm() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (data) => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const STEPS = [PersonalInfo, FamilyFinancialInfo, SituationDescription];

  const Form = useCallback(() => {
    const StepComponent = STEPS[activeStep] || (() => <div>Unknown Step</div>);
    return <StepComponent onNext={handleNext} onBack={handleBack} />;
  }, [activeStep, handleNext]);

  return (
    <Container sx={{ padding: 2 }} maxWidth="md">
      <Paper elevation={3} sx={{ p: 5 }}>
        <FormStepper steps={GLOBAL_CONSTANTS.STEPS} activeStep={activeStep} />
        <Box sx={{ mt: 2 }}>
          <Form />
        </Box>
      </Paper>
    </Container>
  );
}

export default ApplicationForm;
