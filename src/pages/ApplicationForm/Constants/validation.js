import { t } from "i18next";
import * as yup from "yup";

const personalInfoSchema = yup.object().shape({
  name: yup.string().required(t("NameIsRequired")),
  // nationalId: yup.string().required(t("NationalIdIsRequired")),
  // dateOfBirth: yup.date().required(t("DateOfBirthIsRequired")),
  // gender: yup.string().required(t("GenderIsRequired")),
  // address: yup.string().required(t("AddressIsRequired")),
  // city: yup.string().required(t("CityIsRequired")),
  // state: yup.string().required(t("StateIsRequired")),
  // country: yup.string().required(t("CountryIsRequired")),
  // phone: yup.string().required(t("PhoneIsRequired")),
  // email: yup.string().email(t("InvalidEmail")).required(t("EmailIsRequired")),
});

const financialInfoSchema = yup.object().shape({
  maritalStatus: yup.string().required(t("MaritalStatusIsRequired")),
  // dependents: yup
  //   .number()
  //   .typeError(t("DependentsMustBeNumber"))
  //   .required(t("DependentsAreRequired")),
  // employmentStatus: yup.string().required(t("EmploymentStatusIsRequired")),
  // monthlyIncome: yup
  //   .number()
  //   .typeError(t("MonthlyIncomeMustBeNumber"))
  //   .required(t("MonthlyIncomeIsRequired")),
  // housingStatus: yup.string().required(t("HousingStatusIsRequired")),
});

const situationInfoSchema = yup.object().shape({
  currentSituation: yup.string().required(t("CurrentSituationRequired")),
  // employmentCircumstances: yup
  //   .string()
  //   .required(t("EmploymentCircumstancesRequired")),
  // reasonForApplying: yup.string().required(t("ReasonForApplyingRequired")),
});

const validationSchema = {
  0: personalInfoSchema,
  1: financialInfoSchema,
  2: situationInfoSchema,
};

export default validationSchema;
