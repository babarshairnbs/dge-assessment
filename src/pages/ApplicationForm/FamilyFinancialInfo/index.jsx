import ControlSelect from "@/components/ControlSelect";
import ControlTextField from "@/components/ControlTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import {
  defaultValues,
  employmentStatusOptions,
  housingStatusOptions,
  maritalStatusOptions,
} from "../Constants/formConstant";

const FamilyFinancialInfo = ({ onNext, onBack }) => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    maritalStatus: yup.string().required(t("MaritalStatusIsRequired")),
    dependents: yup
      .number()
      .typeError(t("DependentsMustBeNumber"))
      .required(t("DependentsAreRequired")),
    employmentStatus: yup.string().required(t("EmploymentStatusIsRequired")),
    monthlyIncome: yup
      .number()
      .typeError(t("MonthlyIncomeMustBeNumber"))
      .required(t("MonthlyIncomeIsRequired")),
    housingStatus: yup.string().required(t("HousingStatusIsRequired")),
  });

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues.familyFinancialInfo,
    // resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  const gridSize6 = {
    xs: 12,
    sm: 6,
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate mb={6}>
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

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button variant="outlined" onClick={onBack}>
          {t("Back")}
        </Button>
        <Button type="submit" variant="contained">
          {t("Next")}
        </Button>
      </Box>
    </Box>
  );
};

export default FamilyFinancialInfo;
