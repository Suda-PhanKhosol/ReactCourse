/* eslint-disable no-restricted-imports */
/* eslint-disable no-unused-vars */
import React from "react";
import StandardDataTable from "../../Common/components/DataTable/StandardDataTable";
import ProductSearchBox from "../components/ProductSearchBox";
import ColumnNumber from "../../Common/components/DataTable/ColumnNumber";
import Grid from '@material-ui/core/Grid'
import EditButton from '../../Common/components/Buttons/EditButton'

function Products() {
  const [paginated, setPaginated] = React.useState({
    page: 1,
    recordsPerPage: 10,
    orderingField: "",
    ascendingOrder: true,
    searchValues: {
      name: "",
    },
    lastUpdate: new Date(),
  });

  const [totalRecords, setTotalRecords] = React.useState(2);
  const [data, setData] = React.useState([]);

  //load Data
  const loadData = () => {
      //load from API
      // data
      // total Records
    setData([
      { id: 1, name: "x",price: 3000 },
      { id: 1, name: "y",price: 3500 },
    ]);
  };

  // update search value
  const handleUpdateSearch = (values) => {
    setPaginated({
      ...paginated,
      searchValues: {
        name: values.name,
      },
      lastUpdate: new Date(),
    });
  };

  const handleEdit = (id) => {
      alert(id)
  }

  const columns = [
    //   id
    {
      name: "id",
      label: "รหัสรายการ",
    }, //   name
    {
      name: "name",
      label: "รหัสรายการ",
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
    //button
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

  React.useEffect(() => {
    loadData();
  }, [paginated]);

  return (
    <div>
      <ProductSearchBox
        updateSearch={handleUpdateSearch.bind(this)}
      ></ProductSearchBox>
      <StandardDataTable
        name="testTable"
        title="Search Result"
        columns={columns}
        data={data}
        paginated={paginated}
        setPaginated={setPaginated}
        totalRecords={totalRecords}
      ></StandardDataTable>
      {JSON.stringify(paginated, null, 2)}
    </div>
  );
}

export default Products;
