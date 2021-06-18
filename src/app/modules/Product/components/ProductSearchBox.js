/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import FormikTextField from "../../Common/components/CustomFormik/FormikTextField";
import { useHistory } from "react-router-dom";


function ProductSearchBox(props) {

  const history = useHistory();

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};
      // if (!values.productGroupId) {
      //   errors.productGroupId = 'required'
      // }
      return errors;
    },
    initialValues: {
      name: '',
      productGroupId: 1
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      props.updateSearch(values);
      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {/* Start name */}
        <Grid item xs={12} lg={3}>
          <FormikTextField formik={formik} name="name" label="ค้นหาจากชื่อ" />
        </Grid>

        {/* Start productGroupId */}
        <Grid item xs={12} lg={3}>
          <FormikTextField
            formik={formik}
            name="productGroupId"
            label="ProductGroupId"
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
            Search
          </Button>
        </Grid>

        <Grid item xs={12} lg={2}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={() => {
              history.push('/product/new')
            }}
          >
            New
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ProductSearchBox;
