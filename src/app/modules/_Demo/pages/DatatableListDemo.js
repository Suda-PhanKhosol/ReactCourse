/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */

import React from "react";
import * as demoAxios from "../_redux/demoAxios";
import { Chip, Icon } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import { useFormik } from "formik";
import {
  TextField,
  Paper,
  Grid,
  MenuItem,
  Typography,
} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import FormikTextField from "../../Common/components/CustomFormik/FormikTextField";
import ViewButton from "../../Common/components/Buttons/ViewButton";
import EditButton from "../../Common/components/Buttons/EditButton";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

var flatten = require("flat");

require("dayjs/locale/th");
var dayjs = require("dayjs");
dayjs.locale("th");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
  paper_modal: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #e3f2fd",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    width: 500,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    height: "auto",
  },
}));

function DatatableListDemo(props) {
  const classes = useStyles();

  const [paginated, setPaginated] = React.useState({
    page: 1,
    recordsPerPage: 10,
    orderingField: "",
    ascendingOrder: true,
    searchValues: {
      searchProductGroupStatus: 0,
      searchProductGroupName: "",
    },
  });

  const [totalRecords, setTotalRecords] = React.useState(0);
  const [data, setData] = React.useState([]);

  //load Data
  const loadData = () => {
    demoAxios
      .getProductGroupFilter(
        paginated.orderingField,
        paginated.ascendingOrder,
        paginated.page,
        paginated.recordsPerPage,
        paginated.searchValues.searchProductGroupName,
        paginated.searchValues.searchProductGroupStatus
      )
      .then((res) => {
        if (res.data.isSuccess) {
          let flatData = [];
          res.data.data.forEach((element) => {
            flatData.push(flatten(element));
          });
          setData(flatData);
          setTotalRecords(res.data.totalAmountRecords);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {})
      .finally(() => {});
  };

  // column
  const columns = [
    {
      name: "id",
      label: "รหัสรายการ",
    },
    {
      name: "name",
      label: "รายการ",
      option: {
        sort: false,
      },
    },
    {
      name: "statusId",
      label: "สถานะ",
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          if (data[dataIndex].statusId === 1) {
            return (
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
                  label="ใช้งาน"
                />
              </Grid>
            );
          } else {
            return (
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
                  label="ไม่ใช้งาน"
                />
              </Grid>
            );
          }
        },
      },
    },
    {
      name: "วันที่สร้าง",
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <Grid
              style={{ padding: 0, margin: 0 }}
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              {dayjs(data[dataIndex].createdDate).format("DD/MM/YYYY")}
            </Grid>
          );
        },
      },
    },
    {
      name: "",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <Grid
              style={{ padding: 0, margin: 0 }}
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <EditButton
                onClick={() => {
                  handleEdit(data[dataIndex].id);
                }}
              >
                Edit
              </EditButton>
            </Grid>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    print: false,
    download: false,
    filter: false,
    search: false,
    selectableRows: "none",
    serverSide: true,
    count: totalRecords,

    page: paginated.page - 1,
    rowsPerPage: paginated.recordsPerPage,
    rowsPerPageOptions: [5, 10, 15, 20],
    responsive: "vertical",
    rowHover: true,
    onChangeRowsPerPage: (numberOfRows) => {
      setPaginated({ ...paginated, recordsPerPage: numberOfRows });
    },
    onChangePage: (currentPage) => {
      setPaginated({ ...paginated, page: currentPage + 1 });
    },
    onColumnSortChange: (changedColumn, direction) => {
      debugger;
      setPaginated({
        ...paginated,
        orderingField: `${changedColumn}`,
        ascendingOrder: direction === "asc" ? true : false,
      });
    },
    textLabels: {
      body: {
        noMatch: "ไม่พบข้อมูล",
        toolTip: "Sort",
        columnHeaderTooltip: (column) => `Sort for ${column.label}`,
      },
      pagination: {
        next: "ถัดไป",
        previous: "ย้อนกลับ",
        rowsPerPage: "ข้อมูลต่อหน้า",
        displayRows: "of",
      },
      viewColumns: {
        title: "แสดง Columns",
        titleAria: "Show/Hide Table Columns",
      },
    },
  };

  const handleEdit = (id) => {
    alert(id);
  };

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};

      return errors;
    },
    initialValues: {
      productGroupName: paginated.searchValues.searchProductGroupName,
      productGroupStatus: paginated.searchValues.searchProductGroupStatus,
    },
    onSubmit: (values) => {
      setPaginated({
        ...paginated,
        page: 1,
        searchValues: {
          searchProductGroupStatus: (values.productGroupStatus = ""
            ? 0
            : parseInt(values.productGroupStatus)),
          searchProductGroupName: values.productGroupName,
        },
      });

      formik.setSubmitting(false);
    },
  });

  React.useEffect(() => {
    loadData();
  }, [paginated]);

  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={8} sm={4} lg={4}>
            <TextField
              name="productGroupStatus"
              label="สถานะการใช้งาน"
              fullWidth
              select
              value={formik.values.productGroupStatus}
              onChange={formik.handleChange}
            >
              <MenuItem value={0}>ทั้งหมด</MenuItem>
              <MenuItem value={1}>ใช้งาน</MenuItem>
              <MenuItem value={2}>ไม่ใช้งาน</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={8} sm={4} lg={4}>
            <FormikTextField
              name="productGroupName"
              formik={formik}
              label="ค้นหา"
            ></FormikTextField>
          </Grid>
          <Grid item xs={12} lg={4}>
            <ViewButton onClick={formik.handleSubmit} fullWidth>
              {" "}
              ค้นหา{" "}
            </ViewButton>
          </Grid>
        </Grid>
      </Paper>

      {/* Datatable */}
      <MUIDataTable
        title={
          <Typography
            variant="h6"
            style={{ marginLeft: "6px", fontSize: "24px" }}
          >
            รายละเอียดข้อมูล
          </Typography>
        }
        data={data}
        columns={columns}
        options={options}
      />

      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        style={{ marginLeft: 10, marginTop: 10 }}
      >
        <Link
          href="https://github.com/gregnb/mui-datatables"
          color="textSecondary"
          target="_blank"
          rel="noopener"
        >
          Datatable By MUI Datatable
        </Link>
      </Grid>
    </div>
  );
}

export default DatatableListDemo;
