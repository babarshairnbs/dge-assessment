import ControlTextField from "@/components/ControlTextField";
import AIPopup from "@/components/Modal";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Alert, Box, Button, Grid, Snackbar } from "@mui/material";
import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import useRequest from "../../../hooks/useRequest";
import { generateGPTText } from "../../../services/formService";

const SituationDescription = ({ onBack, onSubmit }) => {
  const { t } = useTranslation();
  const [openPopup, setOpenPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const targetField = useRef("");

  /**
   * Custom hook usage for handling GPT text generation requests.
   *
   * @typedef {Object} UseRequestResult
   * @property {Function} request - Function to initiate the GPT text generation request.
   * @property {boolean} isLoading - Indicates if the request is currently loading.
   * @property {*} data - The generated suggestion data from GPT.
   * @property {Function} setData - Function to manually set the suggestion data.
   * @property {Error|null} error - Error object if the request fails.
   *
   * @param {Function} generateGPTText - Function to generate text using GPT.
   * @param {Object} options - Options for the request hook.
   * @param {Function} options.onError - Callback for handling errors during text generation.
   * @returns {UseRequestResult} Result object containing request state and handlers.
   */
  const {
    request: fetchSuggestion,
    isLoading,
    data: suggestion,
    setData: setSuggestion,
    error,
  } = useRequest(generateGPTText, {
    onError: (error) => {
      setOpen(true);
    },
  });

  const { control, setValue, getValues } = useFormContext();

  const handleHelp = (field, key) => {
    targetField.current = field;
    const employmentStatus = getValues("employmentStatus");
    const prompt = t(key, { status: employmentStatus });
    fetchSuggestion(prompt);
    setOpenPopup(true);
  };

  const handleAccept = () => {
    setValue(targetField?.current, suggestion?.result || "");
    setOpenPopup(false);
    setSuggestion("");
  };

  const handleDiscard = () => {
    targetField.current = "field";
    setOpenPopup(false);
    setSuggestion("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const HelpMeWriteButton = ({ field, promptKey }) => {
    return (
      <Button
        startIcon={<HelpOutlineIcon sx={{ marginLeft: 1 }} />}
        variant="outlined"
        onClick={() => handleHelp(field, promptKey)}
        sx={{ mt: 1 }}
      >
        {t("HelpMeWrite")}
      </Button>
    );
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={12} mb={2}>
          <ControlTextField
            name="currentSituation"
            control={control}
            label={t("CurrentFinancialSituation")}
            multiline
            rows={4}
            fullWidth
            required
          />
          <HelpMeWriteButton
            field={"currentSituation"}
            promptKey={"CurrentFinancialSituationPrompt"}
          />
        </Grid>

        <Grid size={12} mb={2}>
          <ControlTextField
            name="employmentCircumstances"
            control={control}
            label={t("EmploymentCircumstances")}
            multiline
            rows={4}
            fullWidth
            required
          />

          <HelpMeWriteButton
            field={"employmentCircumstances"}
            promptKey={"EmploymentCircumstancesPrompt"}
          />
        </Grid>

        <Grid size={12} mb={2}>
          <ControlTextField
            name="reasonForApplying"
            control={control}
            label={t("ReasonForApplying")}
            multiline
            rows={4}
            fullWidth
            required
          />

          <HelpMeWriteButton
            field={"reasonForApplying"}
            promptKey={"ReasonForApplyingPrompt"}
          />
        </Grid>
      </Grid>

      <AIPopup
        open={openPopup}
        loading={isLoading}
        suggestion={suggestion?.result || ""}
        onClose={handleDiscard}
        onAccept={handleAccept}
        onChange={setSuggestion}
      />

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="error" variant="filled">
          {error?.message || t("ErrorGeneratingText")}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SituationDescription;
