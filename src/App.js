import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navb from "./Components/Navb";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import ProductList from "./Components/Ecommerce/ProductList";
import ADDProduct from "./Components/Ecommerce/AddProduct";
import EditProduct from "./Components/Ecommerce/EditProduct";
import TaskList from "./Components/Todolist/TaskList";

function App() {
  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/AddProduct" element={<ADDProduct />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/Ecommerce" element={<ProductList />} />
        <Route path="/EditProduct/:id" element={<EditProduct />} />
        <Route path="/TaskList"element={<TaskList/>}/>
      </Routes>
    </div>
  );
}

export default App;
