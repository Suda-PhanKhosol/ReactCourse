import {combineReducers} from "redux";
import {all} from "redux-saga/effects";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import * as demo from '../app/modules/_Demo/_redux/demoRedux';
import * as payment from '../app/modules/Payment/_redux/paymentRedux';
import * as income from '../app/modules/Payment/_redux/incomeRedux';



export const rootReducer = combineReducers({
  auth: auth.reducer,
  demo: demo.reducer,
  payment: payment.reducer,
  income: income.reducer,


});

export function* rootSaga() {
  yield all([demo.saga(),payment.saga(),income.saga()])

}
