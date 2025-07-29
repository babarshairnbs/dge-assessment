import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../constants";
import { clearLocalStorageItem } from "../../services/localStorageService";
import STORAGE_KEY from "../../constants/Storage";

const SuccessPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNewApplication = () => {
    clearLocalStorageItem(STORAGE_KEY.APPLICATION_DATA);
    navigate(ROUTES.HOME);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      minHeight="70vh"
    >
      <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        {t("ApplicationSubmittedSuccessfully")}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {t("ThankYouForSubmittingYourApplication")}
      </Typography>

      <Button variant="contained" size="large" onClick={handleNewApplication}>
        {t("SubmitAnotherApplication")}
      </Button>
    </Box>
  );
};

export default SuccessPage;
