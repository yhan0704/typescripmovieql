import {BrowserRouter as Router, Route} from "react-router-dom"
import Details from "../routers/Details";
import Home from "../routers/Home";
import { AutocompleteMui } from "./AutocompleteMui";
import EditTextField from "./EditTextField";
import Autocompleted from "./Autocompleted"

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={EditTextField}></Route>
      <Route path="/:id" component={Details}></Route>
      </Router>
    </div>
  );
}

export default App;
