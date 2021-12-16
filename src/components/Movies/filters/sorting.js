import React, { useState } from "react";
import Styles from "./styles.module.css";

import { sortingList } from "../moviesUtil";

const SortingComponent = (props) => {
    const [sortingOptions, setSortingOptions] = useState(sortingList);

    const onSortClick = (sorting) => {
        let newSortingOptions = sortingOptions.map(option => {
            if(option.name === sorting.name) {
                option.type = sorting.type === "desc" ? "asc" : "desc";
                option.clicked = true;
                return option
            } else {
                option.type = "desc";
                option.clicked = false;
                return option
            }
        })
        setSortingOptions(newSortingOptions);
        props.setSorting(`${sorting.value}.${sorting.type}`)
    }

    return <div className={Styles.genres}>
        {sortingOptions.map(sorting => {
            return (
                <div className={sorting.clicked ? Styles.genreActive : Styles.genre} onClick={() => onSortClick(sorting)}>{sorting.name}</div>
            )
        })}
    </div>
}

export default SortingComponent