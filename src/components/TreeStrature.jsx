
import MenuList from './MenuList';
const TreeStrature = ({ menus = [] })=> {
    // console.log(menus)
    // console.log(`Tree Stracture  vali file ${menus}`);
  return (
    <div className="container">
        <MenuList list={menus}/>
        <div className="contant">
            <p>I tested on the vite template preact-ts, when template inits, HMR is not working</p>
           <p>but when I change to export default it works well. </p>
        </div>
    </div>
  )
}

export default TreeStrature;
