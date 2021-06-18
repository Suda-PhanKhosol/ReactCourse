/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */

import React from "react";
import * as productAxios from "../_redux/productAxios";
import { Paper, Grid } from "@material-ui/core";
import EditButton from "../../Common/components/Buttons/EditButton";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import StandardDataTable from "../../Common/components/DataTable/StandardDataTable";
import ProductSearchBox from "../components/ProductSearchBox";
import ColumnDateTime from "../../Common/components/DataTable/ColumnDateTime";
import ColumnNumber from "../../Common/components/DataTable/ColumnNumber";
import ColumnIsActive from "../../Common/components/DataTable/ColumnIsActive";
import { useHistory } from "react-router-dom";

var flatten = require("flat");

require("dayjs/locale/th");
var dayjs = require("dayjs");
dayjs.locale("th");

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    height: "auto",
  },
}));

function Products(props) {
  const classes = useStyles();

  const history = useHistory();

  const [paginated, setPaginated] = React.useState({
    page: 1,
    recordsPerPage: 10,
    orderingField: "",
    ascendingOrder: true,
    searchValues: {
      name: "",
      productGroupId: 1,
    },
    lastUpdate: new Date(),
  });

  const [totalRecords, setTotalRecords] = React.useState(0);
  const [data, setData] = React.useState([]);

  //load Data
  const loadData = () => {
    productAxios
      .getProductFilter(
        paginated.orderingField,
        paginated.ascendingOrder,
        paginated.page,
        paginated.recordsPerPage,
        paginated.searchValues.name,
        paginated.searchValues.productGroupId
      )
      .then((res) => {
        if (res.data.isSuccess) {
          let flatData = [];
          res.data.data.forEach((element) => {
            flatData.push(flatten(element));
          });
          debugger;
          setData(flatData);
          setTotalRecords(res.data.totalAmountRecords);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {})
      .finally(() => {});
  };

  const handleUpdateSearch = (values) => {
    // alert(JSON.stringify(values));
    let newPaginated = {
      ...paginated,
      searchValues: {
        name: values.name,
        productGroupId: values.productGroupId,
      },
      lastUpdate: new Date(),
    };
    setPaginated(newPaginated);
  };

  // column
  const columns = [
    //   id
    {
      name: "id",
      label: "รหัสรายการ",
    },

    // Product group
    {
      name: "productGroup.name",
      label: "Group",
    },

    // name
    {
      name: "name",
      label: "รายการ",
      option: {
        sort: false,
      },
    },

    // price
    {
      name: "price",
      label: "ราคา",
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <ColumnNumber
              Data={data[dataIndex].price}
              thousandSeparator
              isNumericString
            ></ColumnNumber>
          );
        },
      },
    },

    // stock
    {
      name: "stock",
      label: "Stock",
    },

    {
      name: "statusId",
      label: "สถานะ",
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <ColumnIsActive data={data[dataIndex].statusId} activeText="ใช้งาน" inActiveText="ไม่ใช้งาน"></ColumnIsActive>
          );
        },
      },
    },

    // createdDate
    {
      name: "วันที่สร้าง",
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <ColumnDateTime Data={data[dataIndex].createdDate}></ColumnDateTime>
          );
        },
      },
    },

    // edit
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

  const handleEdit = (id) => {
    history.push(`/product/edit/${id}`)
  };

  React.useEffect(() => {
    loadData();
  }, [paginated]);

  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <ProductSearchBox
              updateSearch={handleUpdateSearch.bind(this)}
            ></ProductSearchBox>
          </Grid>
          <Grid item xs={12} lg={12}>
            <StandardDataTable
              name="testTable"
              title="Test"
              columns={columns}
              data={data}
              paginated={paginated}
              setPaginated={setPaginated}
              totalRecords={totalRecords}
            ></StandardDataTable>
          </Grid>
        </Grid>
      </Paper>
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

export default Products;
