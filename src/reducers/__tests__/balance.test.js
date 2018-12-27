import * as constants from "../../actions/constants";
import balanceReducers from "../balance";

describe("describing reducers", () => {
  it("sets the balance", () => {
    const balance = 10;
    expect(
      balanceReducers(undefined, { type: constants.SET_BALANCE, balance })
    ).toEqual(balance);
  });
  it("sends the default state", () => {
    let state = 0;
    expect(balanceReducers(undefined, {})).toEqual(state);
  });
  it("deposits the balance", () => {
    let initialBalance = 10;
    const deposit = 5;
    expect(
      balanceReducers(initialBalance, { type: constants.DEPOSIT, deposit })
    ).toEqual(initialBalance + deposit);
  });

  it("withdraw the balance", () => {
    let initialBalance = 10;
    const withdraw = 5;
    expect(
      balanceReducers(initialBalance, { type: constants.WITHDRAW, withdraw })
    ).toEqual(initialBalance - withdraw);
  });
});
