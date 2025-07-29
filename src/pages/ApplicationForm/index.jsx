import FormStepper from "@/components/Stepper";
import { GLOBAL_CONSTANTS } from "@/constants";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { defaultValues } from "./Constants/formConstant";
import FamilyFinancialInfo from "./FamilyFinancialInfo";
import PersonalInfo from "./PersonalInfo";
import SituationDescription from "./SituationDesc";
import validationSchema from "./Constants/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  clearLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorageService";
import STORAGE_KEY from "../../constants/Storage";
import { useNavigate } from "react-router";
import { ROUTES } from "../../constants";

function ApplicationForm() {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { formValidation } = useMemo(() => {
    let formValidation = validationSchema[activeStep] || null;

    return { formValidation };
  });

  const formMethods = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
    ...(formValidation && {
      resolver: yupResolver(formValidation),
    }),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = formMethods;

  useEffect(() => {
    const storedData = getLocalStorageItem(STORAGE_KEY.APPLICATION_DATA);
    if (storedData) {
      const { activeStep, data } = storedData;
      setActiveStep(activeStep);
      reset(data);
    }
  }, []);

  const STEPS = [PersonalInfo, FamilyFinancialInfo, SituationDescription];

  const Form = useCallback(() => {
    const StepComponent = STEPS[activeStep] || (() => <div>Unknown Step</div>);
    return <StepComponent onNext={handleNext} onBack={handleBack} />;
  }, [activeStep]);

  const isLastStep = activeStep === STEPS.length - 1;

  const handleNext = () => setActiveStep((prev) => prev + 1);

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const onSubmit = (data) => {
    const formData = {
      activeStep,
      data,
    };
    // Save data and active stepper into localstorage for persistence
    setLocalStorageItem(STORAGE_KEY.APPLICATION_DATA, formData);

    if (isLastStep) {
      navigate(ROUTES.SUCCESS);
      return;
    }
    handleNext();
  };

  const handleFormReset = () => {
    reset(defaultValues);
    setActiveStep(0);
    clearLocalStorageItem(STORAGE_KEY.APPLICATION_DATA);
  };

  return (
    <Container sx={{ padding: 2 }} maxWidth="md">
      <Paper elevation={3} sx={{ p: 5 }}>
        <FormStepper steps={GLOBAL_CONSTANTS.STEPS} activeStep={activeStep} />
        {/* Title and reset button */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h5">{t("ApplicationForm")}</Typography>
          <Button
            type="button"
            variant="outlined"
            color="warning"
            onClick={handleFormReset}
            sx={{ minWidth: "40px", px: 1 }}
            aria-label={t("reset")}
          >
            <RestartAltIcon />
          </Button>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 2 }}
        >
          <FormProvider {...formMethods}>
            <Form />
          </FormProvider>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: !activeStep ? "flex-end" : "space-between",
              mt: 4,
            }}
          >
            {!!activeStep && (
              <Button
                variant="outlined"
                onClick={handleBack}
                disabled={!activeStep}
              >
                {t("Back")}
              </Button>
            )}
            <Button type="submit" variant="contained">
              {t(isLastStep ? "Submit" : "Next")}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default ApplicationForm;
