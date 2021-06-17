/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */

import React from "react";
import MUIDataTable from "mui-datatables";
import { Chip, Icon } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import { Grid, Typography } from "@material-ui/core";
import EditButton from "../../../Common/components/Buttons/EditButton";
import * as demoAxios from "../../_redux/demoAxios";

var flatten = require("flat");

require("dayjs/locale/th");
var dayjs = require("dayjs");
dayjs.locale("th");

function DatatableList(props) {
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

  const handleEdit = (id) => {
    alert(id);
  };

  React.useEffect(() => {
    loadData();
  }, [paginated]);

  return (
    <div>
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
    </div>
  );
}

export default DatatableList;
