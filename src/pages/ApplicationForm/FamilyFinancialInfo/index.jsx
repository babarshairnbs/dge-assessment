import ControlSelect from "@/components/ControlSelect";
import ControlTextField from "@/components/ControlTextField";
import { Box, Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  employmentStatusOptions,
  housingStatusOptions,
  maritalStatusOptions,
} from "../Constants/formConstant";

const FamilyFinancialInfo = () => {
  const { t } = useTranslation();

  const { control } = useFormContext(); // Access form methods from FormProvider

  const gridSize6 = {
    xs: 12,
    sm: 6,
  };

  return (
    <Box mb={6}>
      <Grid container spacing={2}>
        <Grid size={gridSize6} mb={2}>
          <ControlSelect
            name="maritalStatus"
            control={control}
            label={t("MaritalStatus")}
            required
            options={maritalStatusOptions}
          />
        </Grid>
        <Grid size={gridSize6} mb={2}>
          <ControlTextField
            name="dependents"
            control={control}
            label={t("NumberOfDependents")}
            required
          />
        </Grid>
        <Grid size={gridSize6} mb={2}>
          <ControlSelect
            name="employmentStatus"
            control={control}
            label={t("EmploymentStatus")}
            required
            options={employmentStatusOptions}
          />
        </Grid>
        <Grid size={gridSize6} mb={2}>
          <ControlTextField
            name="monthlyIncome"
            control={control}
            label={t("MonthlyIncome")}
            required
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
          }}
        >
          <ControlSelect
            name="housingStatus"
            control={control}
            label={t("HousingStatus")}
            required
            options={housingStatusOptions}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FamilyFinancialInfo;
