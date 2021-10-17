import React, { Component } from "react";
import Identicon from "react-identicons";
import wmwc from "../logos/wmwc.png";
import wmmm from "../logos/wmmm.png";
import all from "../logos/all.png";
import dai from "../logos/eth.png";
import mm from "../logos/mm.png";
import "./App.css";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <main
          role="main"
          className="col-lg-12 ml-auto mr-auto"
          style={{ width: "750px" }}
        >
          <span>
            {this.props.provider === null && !this.props.account ? (
              <h2>Connect to Wallet </h2>
            ) : this.props.provider === null && this.props.account !== null ? (
              <div>
                <h2>Wallet is Connected. </h2>
                <div className="card mb-4">
                  <div className="card-body">
                    <form
                      className="mb-3"
                      onSubmit={(event) => {
                        event.preventDefault();
                        let amount;
                        amount = this.input.value.toString();
                        amount = window.web3.utils.toWei(amount, "Ether");
                        this.props.stakeTokens(amount);
                      }}
                    >
                      <div>
                        <label className="float-left">
                          <b>Stake Tokens</b>
                        </label>
                      </div>
                      <div className="input-group mb-4">
                        <input
                          type="text"
                          ref={(input) => {
                            this.input = input;
                          }}
                          className="form-control form-control-lg"
                          placeholder="0"
                          required
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <img src={dai} height="32" alt="" />
                            &nbsp;&nbsp;&nbsp; SHEEPs
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                      >
                        STAKE!
                      </button>
                    </form>
                    <button
                      type="submit"
                      className="btn btn-link btn-block btn-sm"
                      onClick={(event) => {
                        event.preventDefault();
                        this.props.unstakeTokens();
                      }}
                    >
                      UN-STAKE...
                    </button>
                  </div>
                </div>
              </div>
            ) : this.props.provider.isMetaMask ? (
              <h2>Se for Metamask abra isso...</h2>
            ) : (
              <h2>Caso for ambos ... apresente????</h2>
            )}
          </span>
          <p></p>&nbsp; &nbsp;
        </main>
      </div>
    );
  }
}

export default Main;
