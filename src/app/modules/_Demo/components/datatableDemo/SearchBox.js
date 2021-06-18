/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import FormikTextField from "../../../Common/components/CustomFormik/FormikTextField";
import FormikDropdown from '../../../Common/components/CustomFormik/FormikDropdown'

function SearchBox(props) {

  const [status] = React.useState([
      {id:1,name:'ใช้งาน'},
      {id:2,name:'ไม่ใช้งาน'}
  ])

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};
      return errors;
    },
    initialValues: {
      productGroupStatus: 0,
      productGroupName: '',
    },
    onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
      props.updateSearch(values);
      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>

          {/* productGroupStatus */}
        <Grid item xs={12} lg={3}>
          <FormikDropdown
            formik={formik}
            disableFirstItem
            name="productGroupStatus"
            label="สถานะ"
            data={status}
            firstItemText="ทั้งหมด"
          />
        </Grid>

        {/* Start productGroupName */}
        <Grid item xs={12} lg={3}>
          <FormikTextField formik={formik} name="productGroupName" label="ค้นหาจากชื่อ" />
        </Grid>

        <Grid item xs={12} lg={3}>
          <Button type="submit" disabled={formik.isSubmitting} fullWidth color="primary" variant="contained">
            Search
          </Button>
        </Grid>

      </Grid>
    </form>
  );
}

export default SearchBox;
