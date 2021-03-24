import React from 'react';
import classes from "./DropdownItem.module.css";

const DropdownItem=(props)=>{
    return(
        <li className={classes.menuItem}>
            {props.children}
        </li>
    )
}

export default DropdownItem