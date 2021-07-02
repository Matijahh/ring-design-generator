import { Route, Switch } from "react-router-dom";

// Import Style
import "./assets/scss/app.scss";

// Import Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RingPair from "./components/RingPair";
import RingWithSolitaire from "./components/RingWithSolitaire";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", width: "100vw", position: "relative" }}>
        <Sidebar />
        <Switch>
          <Route path="/pair" component={RingPair} />
          <Route path="/with-solitaire" component={RingWithSolitaire} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
