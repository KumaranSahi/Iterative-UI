import DropdownItem from './DropdownItem/DropdownItem'
import classes from './DropdownItems.module.css';
import {Link} from 'react-router-dom'

const DropdownItems=()=>{
    const items=[
        "Getting Started"
        ,"Avatar"
        ,"Alert"
        ,"Badge"
        ,"Button"
        ,"Card"
        ,"Image"
        ,"Input"
        ,"Modal"
        ,"Rating"
    ]
    
    return(
        <ul className={classes.dropdownList}>
            {
                items.map(item=>(
                    <Link to={item==="Getting Started"?'/':`/${item}`} key={item}>
                        <DropdownItem>
                            {item}
                        </DropdownItem>
                    </Link>
                    
                ))
            }
        </ul>
    )
}

export default DropdownItems;