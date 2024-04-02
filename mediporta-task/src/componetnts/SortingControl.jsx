import React from "react";

const SortingControl = ({options, selectedOption, onSelectChange}) => {
    return (
        <select value={selectedOption} onChange={(event) => onSelectChange(event.target.value)}>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}

export default SortingControl