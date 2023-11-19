import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Filter(props) {
    const { filterSet, setSelectedFilters } = props;

    const filterArr = Array.from(filterSet).map((item) =>
        item
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
    );

    function handleChange(event, value) {
        const formattedValueArr = value.map((v) => {
            return v.toLowerCase().split(" ").join("_");
        });

        value.length > 0
            ? setSelectedFilters(new Set(formattedValueArr))
            : setSelectedFilters(filterSet);
    }

    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            options={filterArr}
            getOptionLabel={(filter) => filter}
            filterSelectedOptions
            onChange={handleChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Filter by place type"
                    placeholder="Favorites"
                />
            )}
        />
    );
}
