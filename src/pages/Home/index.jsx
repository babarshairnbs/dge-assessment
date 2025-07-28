import { ArrowForward, Security, Speed, Support } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Container,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useLanguage } from "../../hooks/useLanguage";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { direction } = useLanguage();
  const { t } = useTranslation();

  const handleStartApplication = () => {
    navigate("/application");
  };

  const features = [
    {
      icon: <Speed sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: t("EasyFast"),
      description: t(
        "CompleteYourApplicationInJust3SimpleStepsWithOurIntuitiveWizardInterface"
      ),
    },
    {
      icon: (
        <Security sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      title: t("SecurePrivate"),
      description: t(
        "YourPersonalInformationIsProtectedWithIndustryStandardSecurityMeasures"
      ),
    },
    {
      icon: (
        <Support sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      title: t("AiPoweredHelp"),
      description: t(
        "GetIntelligentAssistanceWhenWritingYourApplicationWithOurBuiltInAiSupport"
      ),
    },
  ];

  return (
    <Container>
      <Box
        sx={{
          minHeight: "100vh",
          direction: direction,
          bgcolor: "background.default",
        }}
      >
        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* Hero Section */}
          <Box
            sx={{
              textAlign: "center",
              mb: 8,
              px: { xs: 2, sm: 4, md: 6 },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "text.primary",
                mb: 3,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                lineHeight: 1.2,
              }}
            >
              {t("ApplyForFinancialAssistance")}
            </Typography>

            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "text.secondary",
                mb: 4,
                fontWeight: 400,
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.5,
                fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              {t(
                "GetTheHelpYouNeedWithOurSimpleSecureAndFastApplicationProcessOurAiPoweredAssistantWillGuideYouThroughEachStep"
              )}
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={handleStartApplication}
              endIcon={<ArrowForward />}
              sx={{
                py: 2,
                px: 4,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                boxShadow: theme.shadows[4],
                "&:hover": {
                  boxShadow: theme.shadows[8],
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              {t("StartApplication")}
            </Button>
          </Box>

          {/* Features Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              component="h3"
              textAlign="center"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "text.primary",
                mb: 6,
              }}
            >
              {t("WhyChooseOurPortal")}
            </Typography>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid key={index} size={{ xs: 12, md: 4 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      textAlign: "center",
                      height: "100%",
                      border: `1px solid ${alpha(theme.palette.divider, 0.12)}`,
                      borderRadius: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: theme.shadows[4],
                        transform: "translateY(-4px)",
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        mb: 2,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Call to Action Section */}
          <Paper
            elevation={0}
            sx={{
              p: 6,
              textAlign: "center",
              bgcolor: alpha(theme.palette.primary.main, 0.05),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "text.primary",
                mb: 2,
              }}
            >
              {t("ReadyToGetStarted")}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 3,
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              {t(
                "BeginYourApplicationProcessTodayAndTakeTheFirstStepTowardGettingTheFinancialSupportYouNeed"
              )}
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={handleStartApplication}
              endIcon={<ArrowForward />}
              sx={{
                py: 1.5,
                px: 3,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              {t("ApplyNow")}
            </Button>
          </Paper>
        </Container>
      </Box>
    </Container>
  );
};

export default Home;
