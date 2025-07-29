import { Brightness4, Brightness7, Language } from "@mui/icons-material";
import {
  alpha,
  AppBar,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { GLOBAL_CONSTANTS, LANGUAGE } from "../../constants";
import { useLanguage } from "../../hooks/useLanguage";
import useThemeMode from "../../hooks/useThemeMode";
import { useTranslation } from "react-i18next";

const Header = () => {
  const theme = useTheme();
  const { language, changeLanguage, direction } = useLanguage();
  const { mode, toggleMode } = useThemeMode();
  const { t } = useTranslation();

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "primary.main",
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.12)}`,
        borderRadius: 0,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 600,
            color: "primary.contrastText",
          }}
        >
          {t("SocialSupportPortal")}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Language Selector */}
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel
              id="language-select-label"
              sx={{ color: "primary.contrastText" }}
            >
              <Language sx={{ mr: 1, fontSize: 18 }} />
              {t("Language")}
            </InputLabel>
            <Select
              labelId="language-select-label"
              value={language}
              onChange={handleLanguageChange}
              label={t("Language")}
              sx={{
                color: "primary.contrastText",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: alpha(theme.palette.primary.contrastText, 0.3),
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: alpha(theme.palette.primary.contrastText, 0.5),
                },
                "& .MuiSvgIcon-root": {
                  color: "primary.contrastText",
                },
              }}
            >
              <MenuItem value={LANGUAGE.EN}>English</MenuItem>
              <MenuItem value={LANGUAGE.AR}>العربية</MenuItem>
            </Select>
          </FormControl>

          {/* Theme Toggle */}
          <IconButton
            onClick={toggleMode}
            color="inherit"
            aria-label={t("ToggleTheme")}
            sx={{
              ml: 1,
              color: "primary.contrastText",
              "&:hover": {
                bgcolor: alpha(theme.palette.primary.contrastText, 0.1),
              },
            }}
          >
            {mode === GLOBAL_CONSTANTS.THEME.DARK ? (
              <Brightness7 />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
