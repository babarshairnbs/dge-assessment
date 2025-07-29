import { alpha, Box, Container, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: alpha(theme.palette.text.primary, 0.05),
        py: 4,
        mt: 8,
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.12)}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          textAlign="center"
          sx={{
            color: "text.secondary",
          }}
        >
          {t("GovernmentSocialSupportPortalAllRightsReserved")}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
