import React from "react";
const symbol_defs = "/images/symbols.svg";

interface Props {
    iconName: string
    viewBox? : string,
    fill? : string,
    stroke? : string,
    viewClass? : string
}
const Icon = ({iconName, viewBox, stroke,viewClass, fill}:Props) => {
    return (
        <svg
            viewBox={viewBox ? viewBox : "0 0 16 16"}
        className={`icon icon-${viewClass} ${fill ? `fill-${fill}` : ""} ${stroke ? `fill-${stroke}` : ""}`}
            >
    <use xlinkHref={`${symbol_defs}#icon-${iconName}`} />
    </svg>
);
};

export default Icon;
