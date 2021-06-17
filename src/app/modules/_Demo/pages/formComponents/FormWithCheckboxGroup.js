/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import FormikCheckBoxGroup from "../../../Common/components/CustomFormik/FormikCheckBoxGroup";
import { useHistory } from "react-router";

function FormWithCheckboxGroup() {
  const history = useHistory();
  const [state] = React.useState({
    hobbyList: [
      { id: 1, name: "Games" },
      { id: 2, name: "Shopping" },
      { id: 3, name: "Jogging" },
    ],
    selectedHobbies:[1,2]
  });

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};

      if (values.hobbies.length===0) {
          errors.hobbies = 'Please choose at least 1 hobby'
      }

      return errors;
    },
    initialValues: {
      hobbies: state.selectedHobbies
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* Hobby */}
        <Grid item xs={12} lg={6}>
          <FormikCheckBoxGroup
            formik={formik}
            name="hobbies"
            label="Hobbies"
            data={state.hobbyList}
          />
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

export default FormWithCheckboxGroup;
