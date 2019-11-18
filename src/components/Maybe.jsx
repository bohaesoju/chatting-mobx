import * as React from "react";

export const Maybe = ({ test, children }) => (
    <React.Fragment>{test ? children : null}</React.Fragment>
);
