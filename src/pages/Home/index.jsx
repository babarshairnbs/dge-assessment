import {
  Container,
  Typography,
  Button,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ROUTES } from "../../constants";

export default function Home({
  mode = "light",
  setMode = () => {},
  language = "en",
  setLanguage = () => {},
}) {
  const navigate = useNavigate();

  const handleThemeToggle = () => setMode(mode === "light" ? "dark" : "light");
  const handleLanguageChange = (_, newLang) => {
    if (newLang) setLanguage(newLang);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
      {/* Heading & Description */}
      <Typography variant="h4" gutterBottom>
        Welcome to Social Support Portal
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Apply for financial assistance quickly and easily with our smart support
        system.
      </Typography>

      {/* Start Application Button */}
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate(ROUTES.APPLICATION)}
      >
        Start Application
      </Button>

      {/* Language & Theme Controls */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
        {/* Language Switch */}
        <ToggleButtonGroup
          value={language}
          exclusive
          onChange={handleLanguageChange}
          size="small"
        >
          <ToggleButton value="en">English</ToggleButton>
          <ToggleButton value="ar">العربية</ToggleButton>
        </ToggleButtonGroup>

        {/* Theme Toggle */}
        <IconButton onClick={handleThemeToggle} color="primary">
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>
    </Container>
  );
}
