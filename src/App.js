import { Route, Switch } from "react-router-dom";

// Import Style
import "./assets/scss/app.scss";

// Import Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RingOne from "./components/RingOne";
import RingTwo from "./components/RingTwo";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", width: "100vw", position: "relative" }}>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={RingOne} />
          <Route path="/second-ring" component={RingTwo} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
