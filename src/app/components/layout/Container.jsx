import React from "react";

const Container = ({ children, className, ...props }) => {
    return (
        <div {...props} className={`container ${className}`}>
            {children}
        </div>
    );
};

export default Container;
