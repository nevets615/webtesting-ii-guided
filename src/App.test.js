import React from "react";
import Dashboard from "./components/Dashboard";
import App from "./App";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";


afterEach(rtl.cleanup);


describe("<App />", () => {
  it("renders without crashing", () => {
  render(<App />)
  });

  it("check number of buttons", () => {});

  it("check the state of balls and strikes on load", () => {});

  it("check the operation of the balls button", () => {});

  it("check the operation of the foul button", () => {});

  it("check the operation of the strike button", () => {});

  it("check the operation of the hit button", () => {});
});
