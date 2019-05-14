
import React from "react";
import Dashboard from "./components/Dashboard";
import App from "./App";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  const wrapper = rtl.render(
    <span className="greet">hello world</span>
  );
});

it("check number of buttons", () => {

});

it("check the state of balls and strikes on load", () => {

});

it("check the operation of the balls button", () => {

});

it("check the operation of the foul button", () => {

});

it("check the operation of the strike button", () => {

});

it("check the operation of the hit button", () => {

});
