
import MenuList from './MenuList';
const TreeStrature = ({ menus = [] })=> {
    // console.log(menus)
    // console.log(`Tree Stracture  vali file ${menus}`);
  return (
    <div className="container">
        <MenuList list={menus}/>
        <div className="contant">
            <p>I have work in EHR logic </p>
        </div>
    </div>
  )
}

export default TreeStrature;
