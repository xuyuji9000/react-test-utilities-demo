import React from "react";
import ReactTestUtils from "react-addons-test-utils";
import MyComponent from "./MyComponent";

const renderer = ReactTestUtils.createRenderer();
renderer.render(<MyComponent></MyComponent>);
const result = renderer.getRenderOutput();

expect(result.type).toBe("div");

