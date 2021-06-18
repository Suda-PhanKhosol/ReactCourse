/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */

import React from "react";
import { Grid } from "@material-ui/core";
import { Chip, Icon } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import PropTypes from "prop-types";

function ColumnIsActive(props) {
  return (
    <div>
      {props.data && (
        <Grid
          style={{ padding: 0, margin: 0 }}
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Chip
            color="primary"
            icon={<DoneIcon style={{ color: "#fff" }} />}
            style={{ color: "#fff" }}
            label={props.activeText}
          />
        </Grid>
      )}

      {!props.data && (
        <Grid
          style={{ padding: 0, margin: 0 }}
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Chip
            color="primary"
            icon={
              <Icon
                style={{ backgroundColor: "#e57373", color: "#fff" }}
                className="far fa-times-circle"
              ></Icon>
            }
            style={{ backgroundColor: "#e57373", color: "#fff" }}
            label={props.inActiveText}
          />
        </Grid>
      )}
    </div>
  );
}

ColumnIsActive.propTypes = {
  activeText: PropTypes.string,
  inActiveText: PropTypes.string,
};

ColumnIsActive.defaultProps = {
  activeText: "Active",
  inActiveText: "InActive",
};

export default ColumnIsActive;
