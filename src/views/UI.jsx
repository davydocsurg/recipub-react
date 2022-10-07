import React from "react";
import Input from "../commons/form/Input";

const UI = () => {
    const required = true;
    return (
        <>
            <div className="container">
                <h2 className="text-center">Components</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Input
                            id="name"
                            labelFor="Name"
                            type="text"
                            placeholder="Name"
                            name="name"
                            required={required}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default UI;
