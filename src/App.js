import "./App.css";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import cEve from "./images/coven.jpg";
import Data from "./pages/Data";
import store from "./app/store";
import { Provider } from "react-redux";
import TestGrid from "./components/TestGrid";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Router>
            <Route exact path="/" component={SearchBar} />
            <Route exact path="/data" component={Data} />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
