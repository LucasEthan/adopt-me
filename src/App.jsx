import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => (
  <div>
    <h1>Adopt me!</h1>
    <SearchParams />
  </div>
);

render(<App />, document.querySelector("#root"));
