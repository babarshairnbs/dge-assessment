import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const ControlTextField = ({
  name,
  control,
  label,
  required = false,
  type = "text",
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          fullWidth
          variant="outlined"
          required={required}
          error={!!error}
          helperText={error ? error.message : ""}
          select={props.select}
          {...props}
        >
          {props?.children}
        </TextField>
      )}
    />
  );
};

export default ControlTextField;
