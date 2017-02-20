import React, { Component } from "react";

class MyComponent extends Component
{
    render()
    {
        return (
            <div>
                <span className="heading">Title</span>
                <Subcomponent foo="bar"></Subcomponent>
            </div>
        );
    }
}
