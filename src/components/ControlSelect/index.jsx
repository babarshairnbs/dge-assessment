import { TextField, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

const ControlSelect = ({
  name,
  control,
  label,
  required = false,
  options = [],
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          label={label}
          fullWidth
          variant="outlined"
          required={required}
          error={!!error}
          helperText={error ? error.message : ""}
          {...props}
        >
          {options?.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {t(label)}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default ControlSelect;
