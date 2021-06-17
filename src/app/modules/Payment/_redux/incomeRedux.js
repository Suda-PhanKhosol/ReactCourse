import { put, takeLatest } from "redux-saga/effects";

// action type บอกว่า Redux ตัวนี้ สามารถทำอะไรได้บ้าง
export const actionTypes = {
  RESET: "[Reset] Action",
  UPDATE_INCOME: "[UPDATE_INCOME] Action",
  DELETE_BY_ID: "[DELETE_BY_ID] Action",
  CALCULATE: "[Calculate] Action",
};

// state ค่าที่ถูกเก็บไว้
const initialState = {
  incomes: [
    { id: 1, title: "Port", amount: 10 },
    { id: 2, title: "Port", amount: 20 },
    { id: 3, title: "Port", amount: 30 },
  ],
  summary: {
    count: 0,
    sum: 0,
  },
};

// reducer แต่ละ Action จะไป update State อย่างไร
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET: {
      return initialState;
    }

    case actionTypes.UPDATE_INCOME: {
      return { ...state, incomes: action.payload };
    }

    case actionTypes.DELETE_BY_ID: {
      let newIncome = [...state.incomes].filter((obj) => {
        return obj.id !== action.payload;
      });

      return { ...state, incomes: newIncome };
    }

    case actionTypes.CALCULATE: {
      //calculate
      let count = [...state.incomes].length;
      let sum = [...state.incomes].reduce(
        (prev, curr) => prev + curr.amount,
        0
      );
      return { ...state, summary: { count, sum } };
    }

    default:
      return state;
  }
};

//action เอาไว้เรียกจากข้างนอก เพื่อเปลี่ยน state
export const actions = {
  reset: () => ({ type: actionTypes.RESET }),
  calculate: () => ({ type: actionTypes.CALCULATE }),
  updateIncome: (payload) => ({ type: actionTypes.UPDATE_INCOME, payload }),
  deleteById: (payload) => ({ type: actionTypes.DELETE_BY_ID, payload }),
};

export function* saga() {
  // yield takeLatest(actionTypes.ACTIONTYPE, function* actionNameSaga() {
  //   yield put(actions.actionToExecute());
  // });

  yield takeLatest(actionTypes.UPDATE_INCOME, function* updateIncomeSaga() {
    yield put(actions.calculate());
  });

  yield takeLatest(actionTypes.DELETE_BY_ID, function* deleteByIdSaga() {
    yield put(actions.calculate());
  });
}
