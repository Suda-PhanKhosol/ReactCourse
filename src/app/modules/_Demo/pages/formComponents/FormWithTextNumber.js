/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import FormikTextNumber from "../../../Common/components/CustomFormik/FormikTextNumber";
import { useHistory } from "react-router";

function FormWithTextNumber() {
  const history = useHistory();
  const [state] = React.useState({
    price: 50,
  });

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};

      if (!values.price) {
        errors.price = "Required";
      }

      return errors;
    },
    initialValues: {
      price: state.price,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* Start price */}
        <Grid item xs={12} lg={3}>
          <FormikTextNumber
            formik={formik}
            name="price"
            label="Price"
            required
          />
        </Grid>

        <Grid item xs={12} lg={3}>
          <Button type="submit" disabled={formik.isSubmitting} fullWidth color="primary" variant="contained">
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

export default FormWithTextNumber;
