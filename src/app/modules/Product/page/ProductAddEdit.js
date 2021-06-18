import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import FormikTextField from "../../Common/components/CustomFormik/FormikTextField";
import { useHistory } from "react-router";
import { useParams } from 'react-router-dom'

function ProductAddEdit() {
  const history = useHistory();

  const {id} = useParams();

  const [state,setState] = React.useState({
    firstName: "",
    lastName: "",
  });

  React.useEffect(() => {
    if (id) {
      //load data to show
      setState({
        firstName: `firstName ${id}`,
        lastName: `lastName ${id}`,
      });
    }
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "Required";
      }

      return errors;
    },
    initialValues: {
      firstName: state.firstName,
      lastName: state.lastName,
    },
    onSubmit: (values) => {
        if (id) {
            // edit
            let newValues = {...values,id:id}
            alert(`edit ${JSON.stringify(newValues,null,2)}`)
        } else {
            // new
            alert(`new ${JSON.stringify(values,null,2)}`)
        }
      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* Start firstName */}
        <Grid item xs={12} lg={3}>
          <FormikTextField
            formik={formik}
            name="firstName"
            label="First Name"
            required
          />
        </Grid>

        {/* Start lastname */}
        <Grid item xs={12} lg={3}>
          <FormikTextField formik={formik} name="lastName" label="Last Name" />
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
              history.push("/product");
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

export default ProductAddEdit;
