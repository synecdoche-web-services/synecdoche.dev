import React, { useEffect, useState } from "react";

export default (props) => {
    let { items, interval = 2500, duration = 600 } = props;
    duration /= 2;

    const spread = Object.assign({}, props);
    delete spread.items;
    delete spread.interval;
    delete spread.duration;

    const [index, setIndex] = useState(0);
    const [hidden, setHidden] = useState(false);

    const nextItem = () => {
        setHidden(true);
        setTimeout(() => {
            setIndex((index + 1) % items.length);
            setHidden(false);
        }, duration);
    };

    useEffect(() => {
        const id = setInterval(nextItem, interval);
        return () => clearInterval(id);
    });

    return (
        <span
            {...spread}
            style={Object.assign(
                {
                    transition: `${duration}ms opacity`,
                    opacity: hidden ? 0 : 1,
                },
                spread.style
            )}
        >
            {items[index]}
        </span>
    );
};
