import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { App } from "../App";
configure({ adapter: new Adapter() });
describe("App component", () => {
  const mockdeposit = jest.fn();
  const mockwithdraw = jest.fn();
  const props = { balance: 20, deposit: mockdeposit, withdraw: mockwithdraw };
  const app = shallow(<App {...props} />);
  it("should render properly", () => {
    expect(app).toMatchSnapshot();
  });
  it("should display balance from props", () => {
    expect(app.find(".balance").text()).toEqual("Balance is: 20");
  });
  describe("on change of textbox value when empty or with Nan", () => {
    beforeEach(() => {
      app.find(".input-box").simulate("change", { target: { value: "" } });
    });
    it("should update the state", () => {
      expect(app.state().balance).toEqual(0);
    });
  });
  describe("on change of textbox value", () => {
    const updatedbalance = 20;
    beforeEach(() => {
      app
        .find(".input-box")
        .simulate("change", { target: { value: updatedbalance } });
    });
    it("should update the state", () => {
      expect(app.state().balance).toEqual(parseInt(updatedbalance));
    });
    describe("on click of deposit button", () => {
      beforeEach(() => {
        app.find(".deposit-balance").simulate("click");
      });
      it("should call the deposit action ", () => {
        expect(mockdeposit).toHaveBeenCalledWith(parseInt(updatedbalance));
      });
    });
    describe("on click of withdraw button", () => {
      beforeEach(() => {
        app.find(".withdraw-balance").simulate("click");
      });
      it("should call the withdraw button", () => {
        expect(mockwithdraw).toHaveBeenCalledWith(parseInt(updatedbalance));
      });
    });
  });
});
