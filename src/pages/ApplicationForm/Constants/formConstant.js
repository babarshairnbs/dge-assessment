const defaultValues = {
  name: "",
  nationalId: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  country: "",
  phone: "",
  email: "",

  // familyFinancialInfo
  maritalStatus: "",
  dependents: "",
  employmentStatus: "",
  monthlyIncome: "",
  housingStatus: "",

  // situationDescription
  situationDetails: "",
  assistanceNeeded: "",
  additionalComments: "",
};

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const maritalStatusOptions = [
  { label: "Single", value: "single" },
  { label: "Married", value: "married" },
  { label: "Divorced", value: "divorced" },
  { label: "Widowed", value: "widowed" },
];

const employmentStatusOptions = [
  { label: "Employed", value: "employed" },
  { label: "Unemployed", value: "unemployed" },
  { label: "Self-Employed", value: "self_employed" },
  { label: "Student", value: "student" },
  { label: "Retired", value: "retired" },
];

const housingStatusOptions = [
  { label: "Renting", value: "renting" },
  { label: "Owned", value: "owned" },
  { label: "With Family", value: "with_family" },
  { label: "Homeless", value: "homeless" },
];

export {
  defaultValues,
  genderOptions,
  maritalStatusOptions,
  employmentStatusOptions,
  housingStatusOptions,
};
