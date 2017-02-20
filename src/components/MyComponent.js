import React, { Component } from "react";
import SubComponent from "./SubComponent";

class MyComponent extends Component
{
    render()
    {
        return (
            <div>
                <span className="heading">Title</span>
                <SubComponent foo="bar"></SubComponent>
            </div>
        );
    }
}

export default MyComponent;
