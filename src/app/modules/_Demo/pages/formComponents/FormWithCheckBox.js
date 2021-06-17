/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import FormikCheckBox from "../../../Common/components/CustomFormik/FormikCheckBox";
import { useHistory } from "react-router";

function FormWithCheckBox() {
  const history = useHistory();
  const [state] = React.useState({
    isActive: true,
    isAllow: false,
    isAccept: false,
  });

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};

      if (!values.isAccept) {
        errors.isAccept = "Please accept!";
      }

      return errors;
    },
    initialValues: {
      isActive: state.isActive,
      isAllow: state.isAllow,
      isAccept: state.isAccept,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* isAllow */}
        <Grid item xs={12} lg={2}>
          <FormikCheckBox formik={formik} color="secondary" name="isActive" label="Active" />
        </Grid>

        {/* isAllow */}
        <Grid item xs={12} lg={2}>
          <FormikCheckBox formik={formik} name="isAllow" label="Allow" />
        </Grid>

        {/* isAllow */}
        <Grid item xs={12} lg={2}>
          <FormikCheckBox formik={formik} name="isAccept" label="Accept?" />
        </Grid>

        <Grid item xs={12} lg={3}>
          <Button
            type="submit"
            disabled={formik.isSubmitting}
            fullWidth
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Button
            fullWidth
            onClick={() => {
              history.push("/demo/formDemo");
            }}
            variant="contained"
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <br></br>
      values: {JSON.stringify(formik.values)}
      <br></br>
      error: {JSON.stringify(formik.errors)}
      <br></br>
      touched: {JSON.stringify(formik.touched)}
    </form>
  );
}

export default FormWithCheckBox;
