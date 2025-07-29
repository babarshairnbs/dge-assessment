import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { ROUTES } from "../../constants";

const GlobalError = ({ error, resetErrorBoundary }) => {
  const { t } = useTranslation();

  const handleReload = () => window.location.reload();
  const handleGoHome = () => (window.location.href = ROUTES.HOME);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      textAlign="center"
      gap={2}
    >
      <Typography variant="h5" color="error">
        {t("SomethingWentWrong")}
      </Typography>
      <Typography variant="body2" color="text.secondary" maxWidth="sm">
        {error?.message || t("UnexpectedErrorMessage")}
      </Typography>

      <Box display="flex" gap={2} mt={2}>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={handleReload}
        >
          {t("TryAgain")}
        </Button>
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={handleGoHome}
        >
          {t("GoHome")}
        </Button>
      </Box>
    </Box>
  );
};

export default GlobalError;
