import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { deposit, withdraw } from "../actions/balance";
export class App extends Component {
  state = { balance: 0 };
  handeChange(e) {
    if (isNaN(parseInt(e.target.value))) {
      if (e.target.value === "") {
        this.setState({ balance: 0 });
      }
    } else {
      this.setState({ balance: parseInt(e.target.value) });
    }
  }
  deposit() {
    this.props.deposit(this.state.balance);
    this.setState({ balance: 0 });
  }
  withdraw() {
    this.props.withdraw(this.state.balance);
    this.setState({ balance: 0 });
  }
  render() {
    return (
      <div className="container">
        <h1 className="balance">Balance is: {this.props.balance}</h1>
        <label className="amount">Enter Amount:</label>
        <input
          type="text"
          className="input-box"
          onChange={this.handeChange.bind(this)}
          value={this.state.balance}
        />
        <div className="btn-wrap">
          <button className="deposit-balance" onClick={this.deposit.bind(this)}>
            Deposit
          </button>
          <button
            className="withdraw-balance"
            onClick={this.withdraw.bind(this)}
          >
            Withdraw
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return { balance: state };
  },
  { deposit, withdraw }
)(App);
