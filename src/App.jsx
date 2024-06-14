import './App.css'
import {menus} from "../src/components/TreeData"
import TreeStrature from './components/TreeStrature';
function App() {

  return (
    <>
      {/* <TreeData/> */}
      <TreeStrature menus = {menus} />
    </>
  )
}

export default App
