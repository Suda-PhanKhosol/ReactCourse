/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */

import React from "react";
import { Grid } from "@material-ui/core";
import NumberFormat from "react-number-format";

function ColumnNumber(props) {
  function currencyFormat(num) {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  return (
    <div>
      <Grid
        style={{ padding: 0, margin: 0 }}
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <NumberFormat {...props} value={props.Data} displayType="text" />
      </Grid>
    </div>
  );
}

export default ColumnNumber;
