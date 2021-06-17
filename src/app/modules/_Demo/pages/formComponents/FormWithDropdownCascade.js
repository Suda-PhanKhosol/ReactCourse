/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import FormikDropdown from "../../../Common/components/CustomFormik/FormikDropdown";
import * as CONST from "../../../../../Constants";
import Axios from "axios";
import { useHistory } from "react-router";

function FormWithDropdownCascade(props) {
  const api_get_productGroup_url = `${CONST.API_URL}/ProductGroup/getAllProductGroup/`;
  const api_get_product_url = `${CONST.API_URL}/Product/getproductByGroupId/`;

  const [productGroup, setProductGroup] = React.useState([]);
  const [product, setProduct] = React.useState([]);

  const history = useHistory();

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};

      if (values.productId === 0) {
        errors.productId = 'Required'
      }

      return errors;
    },
    initialValues: {
      productGroupId: 1,
      productId: 1,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const loadProductGroup = () => {
    //Load ProductGroup
    Axios.get(api_get_productGroup_url)
      .then((res) => {
        if (res.data.isSuccess) {
          setProductGroup(res.data.data);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const loadProduct = (productGroupId) => {
    //Load Product
    Axios.get(api_get_product_url + productGroupId)
      .then((res) => {
        if (res.data.isSuccess) {
          setProduct(res.data.data);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };


  React.useEffect(() => {
    loadProductGroup();
  }, []);

  React.useEffect(() => {
    loadProduct(formik.values.productGroupId);
  }, [formik.values.productGroupId]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        {/* ProductGroup */}
        <Grid item xs={12} lg={2}>
          <FormikDropdown
            formik={formik}
            name="productGroupId"
            label="ProductGroup"
            data={productGroup}
            firstItemText="Select ProductGroup"
            valueFieldName="id"
            displayFieldName="name"
            selectedCallback={() => {
              formik.setFieldValue("productId", 0);
            }}
          />
        </Grid>

        {/* Product */}
        <Grid item xs={12} lg={2}>
          <FormikDropdown
            formik={formik}
            name="productId"
            label="Product"
            data={product}
            firstItemText="Select Product"
            valueFieldName="id"
            displayFieldName="name"
          />
        </Grid>

        <Grid item xs={12} lg={3}>
          <Button color="primary" type="submit" fullWidth variant="contained">
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

export default FormWithDropdownCascade;
