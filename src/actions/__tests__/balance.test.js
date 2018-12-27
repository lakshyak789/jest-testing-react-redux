import * as constants from "../constants";
import * as actions from "../balance";

it("create action to set balance", () => {
  const balance = 0;
  let expectedAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it("creates action to deposit balance", () => {
  const deposit = 10;
  let expectedAction = { type: constants.DEPOSIT, deposit };
  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it("creates action to withdraw balance", () => {
  const withdraw = 10;
  let expectedAction = { type: constants.WITHDRAW, withdraw };
  expect(actions.withdraw(withdraw)).toEqual(expectedAction);
});
