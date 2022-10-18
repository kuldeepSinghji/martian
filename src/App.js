import {useContext } from "react";
import AllFood from "./components/AllFood";
import Food from "./components/Food";
import ServialMaterials from "./components/ServialMaterials";
import Water from "./components/Water";
import FoodContext from "./context/FoodContext";
// import {img} from "./components/images/space.jpg"
import "./App.css"
function App() {
  const {state,dispatch} = useContext(FoodContext)
  // console.log(state)
  return (
    <>
    <div className="App">
     <AllFood/>
     <Food/>
     <Water/>
     <ServialMaterials/>
    </div>
    </>
  );
}

export default App;
