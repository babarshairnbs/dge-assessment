import { Box, Grid, Button, IconButton, Snackbar, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ControlTextField from "@/components/ControlTextField";
// import { useAIHelper } from "@/hooks/useAIHelper";
import AIPopup from "@/components/Modal";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import useRequest from "../../../hooks/useRequest";
import { generateGPTText } from "../../../services/formService";

const SituationDescription = ({ onBack, onSubmit }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [targetField, setTargetField] = useState(null);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const {
    request: fetchSuggestion,
    isLoading,
    data: suggestion,
    setData: setSuggestion,
    error,
  } = useRequest(generateGPTText, {
    onError: (error) => {
      console.log("Error generating text:", error);
      setOpen(true);
    },
  });

  const { control, handleSubmit, setValue } = useForm({
    // defaultValues: defaultValues,
    // resolver: yupResolver(schema),
    mode: "all",
  });

  const handleHelp = (field, prompt) => {
    setTargetField(field);
    fetchSuggestion(prompt);
    setOpenPopup(true);
  };

  const handleAccept = () => {
    setValue(targetField, suggestion?.result || "");
    setOpenPopup(false);
    setSuggestion("");
  };

  const handleDiscard = () => {
    setTargetField(null);
    setOpenPopup(false);
    setSuggestion("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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

          <Button
            startIcon={<HelpOutlineIcon />}
            variant="outlined"
            onClick={() =>
              handleHelp(
                "currentSituation",
                "I am struggling financially. Help me describe my current financial situation."
              )
            }
            sx={{ mt: 1 }}
          >
            {t("HelpMeWrite")}
          </Button>
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
          <Button
            startIcon={<HelpOutlineIcon />}
            variant="outlined"
            onClick={() =>
              handleHelp(
                "employmentCircumstances",
                "I have been unemployed recently. Help me describe my employment circumstances."
              )
            }
            sx={{ mt: 1 }}
          >
            {t("HelpMeWrite")}
          </Button>
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
          <Button
            startIcon={<HelpOutlineIcon />}
            variant="outlined"
            onClick={() =>
              handleHelp(
                "reasonForApplying",
                "I am applying for government assistance. Help me explain why I need this support."
              )
            }
            sx={{ mt: 1 }}
          >
            {t("HelpMeWrite")}
          </Button>
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="space-between" mt={4}>
        <Button variant="outlined" onClick={onBack}>
          {t("Back")}
        </Button>
        <Button type="submit" variant="contained">
          {t("Submit")}
        </Button>
      </Box>

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
