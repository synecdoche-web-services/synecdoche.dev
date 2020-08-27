import React, { useEffect, useState, ReactNode } from "react";

interface TextSwapProps {
    items: ReactNode[];
    interval: number;
    duration: number;
}

const TextSwap = ({
    items,
    interval = 2500,
    duration = 600,
}: TextSwapProps) => {
    const [index, setIndex] = useState(0);
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setHidden(false);
        const id = setTimeout(() => {
            setHidden(true);
            setTimeout(() => {
                setIndex((index + 1) % items.length);
                setHidden(false);
            }, duration / 2);
        }, interval);
        return () => clearTimeout(id);
    }, [items, index]);

    return (
        <span
            style={{
                transition: `${duration / 2}ms opacity`,
                opacity: hidden ? 0 : 1,
            }}
        >
            {items[index]}
        </span>
    );
};

export default TextSwap;
