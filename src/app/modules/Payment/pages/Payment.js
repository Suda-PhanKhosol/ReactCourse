/* eslint-disable no-restricted-imports */
import React from "react";
import { Box } from "@material-ui/core";
import PaymentList from "../components/PaymentList";
import PaymentAdd from "../components/PaymentAdd";
import PaymentSummary from "../components/PaymentSummary";

import Grid from "@material-ui/core/Grid";

function Payment() {
  return (
    <div>
      
      <Grid  container direction="row" justify="center">
      <Grid item xs={12} lg={6}>
        <PaymentAdd></PaymentAdd>
      </Grid>
    </Grid>

<br />
    <Grid container direction="row" justify="center">
      
      <Grid item xs={12} lg={6}>
        <PaymentList></PaymentList>
        <PaymentSummary></PaymentSummary>
      </Grid>
    </Grid>
       
    </div>
   
  );
}

export default Payment;
