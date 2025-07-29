import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const AIPopup = ({
  open,
  suggestion,
  loading,
  onClose,
  onAccept,
  onChange,
}) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{t("AISuggestion")}</DialogTitle>
      <DialogContent>
        {loading ? (
          <CircularProgress />
        ) : (
          <TextField
            multiline
            rows={5}
            fullWidth
            value={suggestion}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t("Discard")}</Button>
        <Button onClick={onAccept} variant="contained">
          {t("Accept")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AIPopup;
