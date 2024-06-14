import { useState } from "react";
// import {AddCircleIcon} from '@mui/icons-material/AddCircle';
// import {AddIcon} from '@mui/icons-material/Add';
// import {RemoveIcon} from '@mui/icons-material/Remove';
import MenuList from "./MenuList";

const MenuItem = ({key,item})=>{
    const [displaycurrentitem ,setDisplaycurrentitem] = useState({})

    const Handleonopen= (currentLabel) =>{
        setDisplaycurrentitem({...displaycurrentitem,[currentLabel]:!displaycurrentitem[currentLabel]});
    }
    console.log(displaycurrentitem);
  return (
    <li>
        <div style={{display:'flex',gap:'20px'}}>
        <p className="list-item" key={key}>{item.label}</p>
        {
            item && item.children && item.children.length ? <span className="swipe" onClick={()=>Handleonopen(item.label)}>{
                displaycurrentitem[item.label]? '-': '+'
            }</span> : null
        }
        </div>
      
      {item && item.children && item.children.length > 0 && displaycurrentitem[item.label]
       ? <MenuList list={item.children}/>
      : null}
    </li>
  )
}

export default MenuItem;
