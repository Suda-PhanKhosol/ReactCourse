/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */

import React from "react";
import { Grid } from "@material-ui/core";

require("dayjs/locale/th");
var dayjs = require("dayjs");
dayjs.locale("th");

function ColumnDateTime(props) {
  return (
    <Grid
      style={{ padding: 0, margin: 0 }}
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      {dayjs(props.Data).format("DD/MM/YYYY HH:mm:ss")}
    </Grid>
  );
}

export default ColumnDateTime;
