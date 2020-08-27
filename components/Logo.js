import React from "react";

export default (props) => (
    <svg
        {...props}
        style={Object.assign(
            {
                height: `1em`,
                color: `#23b253`,
            },
            props.style
        )}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fill="currentColor" d="M 100 0 l -60 58 l 1 -20 z" />
        <path fill="currentColor" d="M 0 100 l 60 -58 l -1 20 z" />
    </svg>
);
