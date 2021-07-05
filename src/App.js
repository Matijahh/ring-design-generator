import { Route, Switch } from "react-router-dom";

// Import Style
import "./assets/scss/app.scss";

// Import Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RingPair from "./components/RingPair";
import RingSolo from "./components/RingSolo";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", width: "100vw", position: "relative" }}>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={RingPair} />
          <Route path="/one-ring" component={RingSolo} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
