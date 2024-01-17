import React from "react";

export default function FieldComponent({ onChange = () => {}, onBlur = () => {}, value = '' }) {

    return (
        <div>
            <input
                onChange={(e) => onChange(e.target.value)}
                onBlur={(e) => onBlur(e.target.value)}
                value={value}
            />
        </div>
    );
}