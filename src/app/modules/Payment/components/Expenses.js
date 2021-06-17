import React from 'react'
import { useFormik } from "formik";
import {Box, Grid, Button } from "@material-ui/core/";
import FormikTextField from "../../Common/components/CustomFormik/FormikTextField";
import FormikTextNumber from "../../Common/components/CustomFormik/FormikTextNumber";
import { useSelector, useDispatch } from 'react-redux'
import * as incomeRedux from '../_redux/incomeRedux'

export default function Expenses() {
      const dispatch = useDispatch()
  const incomeReducer = useSelector(({income}) => income)

  const [state] = React.useState({
    title: "",
    amount: 0,
  });

  const handleReset = () => {
    //reset redux
    dispatch(incomeRedux.actions.reset())
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
      let lastId = Math.max(...incomeReducer.incomes.map((o) => o.id), 0);
      newItem.id = lastId + 1 

      // copy list and edit newlist
      let newIncomes = [...incomeReducer.incomes,newItem]

      // dispatch
      dispatch(incomeRedux.actions.updateIncome(newIncomes))

      // alert(JSON.stringify(newPayments))

      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
          <br />
          <br />
      <Grid container spacing={3}>
                  {/* Start title */}
                  <Grid item xs={12} lg={6}>
                  <FormikTextField
                        formik={formik}
                        name="title"
                        label="Descripition"
                        required
                  />
                  </Grid>

                  {/* Start amount */}
                  <Grid item xs={12} lg={6}>
                  <FormikTextNumber
                        formik={formik}
                        name="amount"
                        label="Amount"
                        required
                  />
                  </Grid>
      </Grid> <br />
      <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                         <Button
                              type="submit"
                              disabled={formik.isSubmitting}
                              fullWidth
                              disabled={(incomeReducer.summary.sum >=300)}
                              color="primary"
                              variant="contained"
                        >
                              Add
                        </Button>
                  </Grid>

                  <Grid direction="row" item xs={12} lg={6}>
                              <Button
                                    disabled={formik.isSubmitting}
                                    fullWidth
                                    color="default"
                                    variant="contained"
                                    onClick={handleReset.bind(this)}>
                                    Reset
                              </Button>
                  </Grid>
      </Grid>
    </form>
  );
}
