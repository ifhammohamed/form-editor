import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  // Dynamically validating fields based on type
  // Example: Add rules for each field type as needed
  textField: Yup.string().required("Required"),
  checkboxField: Yup.boolean(),
});

export default validationSchema;
