import { Box, Grid, Button, Paper, Typography, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ControlTextField from "@/components/ControlTextField";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { yupResolver } from "@hookform/resolvers/yup";
import personalInfoSchema from "../Constants/validation";
import { defaultValues, genderOptions } from "../Constants/formConstant";
import ControlSelect from "@/components/ControlSelect";

const PersonalInfo = ({ onNext }) => {
  const { t } = useTranslation();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: defaultValues?.personalInfo || {},
    // resolver: yupResolver(personalInfoSchema),
    mode: "all",
  });

  const onSubmit = (data) => {
    onNext(data); // Pass data to parent
  };

  const handleFormReset = () => {
    reset(defaultValues?.personalInfo);
  };

  const gridSize6 = {
    xs: 12,
    sm: 6,
  };

  const gridSize4 = {
    xs: 12,
    sm: 4,
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5">{t("PersonalInformation")}</Typography>
        <Button
          type="button"
          variant="outlined"
          color="warning"
          onClick={handleFormReset}
          sx={{ minWidth: "40px", px: 1 }}
          aria-label={t("reset")}
        >
          <RestartAltIcon />
        </Button>
      </Box>
      <Grid container spacing={3} mb={5}>
        <Grid size={gridSize6} mb={2}>
          <ControlTextField
            name="name"
            control={control}
            label={t("Name")}
            required
          />
        </Grid>
        <Grid size={gridSize6} mb={2}>
          <ControlTextField
            name="nationalId"
            control={control}
            label={t("NationalID")}
            type="number"
            required
          />
        </Grid>
        <Grid size={gridSize6} mb={2}>
          <ControlTextField
            name="dateOfBirth"
            control={control}
            label={t("DateOfBirth")}
            type="date"
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid size={gridSize6} mb={2}>
          <ControlSelect
            name="gender"
            control={control}
            label={t("Gender")}
            required
            options={genderOptions}
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
          }}
          mb={2}
        >
          <ControlTextField
            name="address"
            control={control}
            label={t("Address")}
            required
          />
        </Grid>
        <Grid size={gridSize4} mb={2}>
          <ControlTextField
            name="city"
            control={control}
            label={t("City")}
            required
          />
        </Grid>
        <Grid size={gridSize4} mb={2}>
          <ControlTextField
            name="state"
            control={control}
            label={t("State")}
            required
          />
        </Grid>
        <Grid size={gridSize4} mb={2}>
          <ControlTextField
            name="country"
            control={control}
            label={t("Country")}
            required
          />
        </Grid>
        <Grid size={gridSize6} mb={2}>
          <ControlTextField
            name="phone"
            control={control}
            label={t("Phone")}
            required
          />
        </Grid>
        <Grid size={gridSize6} mb={2}>
          <ControlTextField
            name="email"
            control={control}
            label={t("Email")}
            required
          />
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "right", mt: 4 }}>
        <Button type="submit" variant="contained" color="primary" size="large">
          {t("Next")}
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
