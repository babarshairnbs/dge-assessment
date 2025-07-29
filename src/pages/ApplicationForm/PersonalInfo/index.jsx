import { Box, Grid, Button, Paper, Typography, MenuItem } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ControlTextField from "@/components/ControlTextField";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { yupResolver } from "@hookform/resolvers/yup";
import personalInfoSchema from "../Constants/validation";
import { defaultValues, genderOptions } from "../Constants/formConstant";
import ControlSelect from "@/components/ControlSelect";

const PersonalInfo = () => {
  const { t } = useTranslation();

  const { control } = useFormContext(); // Access form methods from FormProvider

  const gridSize6 = {
    xs: 12,
    sm: 6,
  };

  const gridSize4 = {
    xs: 12,
    sm: 4,
  };

  return (
    <Box>
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
    </Box>
  );
};

export default PersonalInfo;
