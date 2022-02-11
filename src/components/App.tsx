import {BrowserRouter as Router, Route} from "react-router-dom"
import Details from "../routers/Details";
import Home from "../routers/Home";
import DragDrop from "./DragDrop";

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={DragDrop}></Route>
      <Route path="/:id" component={Details}></Route>
      </Router>
    </div>
  );
}

export default App;
