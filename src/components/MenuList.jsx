import MenuItem from "./MenuItem"

const  MenuList = ({list = []})=>{
  return (
    <ul className="menu-item-container">
    {
        list.length > 0 ? (
         list.map((item, idx) => {
           return  <MenuItem key={idx} item={item}/>
         })
        ) : null
    }      
    </ul>
  )
}

export default MenuList
