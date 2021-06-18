import axios from "axios";
import * as CONST from "../../../../Constants";
import { encodeURLWithParams } from "../../Common/components/ParamsEncode";


const PRODUCT_URL = `${CONST.API_URL}/Product`;


export const getProduct = (id) => {
  return axios.get(`${PRODUCT_URL}/getproduct/${id}`);
};

export const getProductFilter = (
  orderingField,
  ascendingOrder,
  page,
  recordsPerPage,
  name,
  productGroupId
) => {
  let payload = {
    page,
    recordsPerPage,
    orderingField,
    ascendingOrder,
    name,
    
  };
  if(productGroupId){
    payload.productGroupId = productGroupId
  }
  return axios.get(encodeURLWithParams(`${PRODUCT_URL}/filter`, payload));
};


