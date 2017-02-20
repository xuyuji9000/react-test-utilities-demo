import React from "react";
import ReactTestUtils from "react-addons-test-utils";
import expect from "expect";

import MyComponent from "./MyComponent";
import SubComponent from "./SubComponent";

describe("MyComponent",function(){


    it("is a div", function() {
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<MyComponent></MyComponent>);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe("div");
    });

    it("has specific children array",function() {
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<MyComponent></MyComponent>);
        const result = renderer.getRenderOutput();

        expect(result.props.children).toEqual([
            <span className="heading">Title</span>,
            <SubComponent foo="bar"></SubComponent>
        ]);
    });
});

