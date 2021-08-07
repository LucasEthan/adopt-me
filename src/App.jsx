import { render } from "react-dom";
import Pet from "./Pet";

const App = () => (
  <div>
    <h1>Adopt me!</h1>
    <Pet name="Luke" animal="Dog" breed="Auggie" />
    <Pet name="Max" animal="Rabbit" breed="Belgian Hare Rabbit" />
    <Pet name="Charlie" animal="Hamster" breed="Darf White Russian Hamster" />
  </div>
);

render(<App />, document.getElementById("root"));
