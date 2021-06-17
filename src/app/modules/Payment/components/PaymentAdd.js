/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import React from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import FormikTextField from "../../Common/components/CustomFormik/FormikTextField";
import FormikTextNumber from "../../Common/components/CustomFormik/FormikTextNumber";
import { useSelector, useDispatch } from 'react-redux'
import * as paymentRedux from '../_redux/paymentRedux'

function PaymentAdd() {
  const dispatch = useDispatch()
  const paymentReducer = useSelector(({payment}) => payment)

  const [state] = React.useState({
    title: "",
    amount: 0,
  });

  const handleReset = () => {
    //reset redux
    dispatch(paymentRedux.actions.reset())
  }

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};

      if (!values.title) {
        errors.title = "Required";
      }

      return errors;
    },
    initialValues: {
      title: state.title,
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // update redux state

      // get obj to add
      let newItem = {...values}
      newItem.amount = +values.amount;

      //set id
      let lastId = Math.max(...paymentReducer.payments.map((o) => o.id), 0);
      newItem.id = lastId + 1 

      // copy list and edit newlist
      let newPayments = [...paymentReducer.payments,newItem]

      // dispatch
      dispatch(paymentRedux.actions.updatePayment(newPayments))

      // alert(JSON.stringify(newPayments))

      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* Start title */}
        <Grid item xs={12} lg={3}>
          <FormikTextField
            formik={formik}
            name="title"
            label="Title"
            required
          />
        </Grid>

        {/* Start amount */}
        <Grid item xs={12} lg={3}>
          <FormikTextNumber
            formik={formik}
            name="amount"
            label="Amount"
            required
          />
        </Grid>

        <Grid item xs={12} lg={3}>
          <Button
            type="submit"
            disabled={formik.isSubmitting}
            fullWidth
            disabled={(paymentReducer.summary.sum >=300)}
            color="primary"
            variant="contained"
          >
            Add
          </Button>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Button
            disabled={formik.isSubmitting}
            fullWidth
            color="default"
            variant="contained"
            onClick={handleReset.bind(this)}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
      {/* <br></br>
      values: {JSON.stringify(formik.values)}
      <br></br>
      error: {JSON.stringify(formik.errors)}
      <br></br>
      touched: {JSON.stringify(formik.touched)} */}
    </form>
  );
}

export default PaymentAdd;
