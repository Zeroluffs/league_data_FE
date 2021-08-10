import "./App.css";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import cEve from "./images/coven.jpg";
import Data from "./pages/Data";
function App() {
  return (
    
    <div>
      <Router>
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/data" component={Data} />
      </Router>
    </div>
  );
}

export default App;
