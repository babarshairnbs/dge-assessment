import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";

const AIPopup = ({
  open,
  suggestion,
  loading,
  onClose,
  onAccept,
  onChange,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>AI Suggestion</DialogTitle>
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
        <Button onClick={onClose}>Discard</Button>
        <Button onClick={onAccept} variant="contained">
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AIPopup;
