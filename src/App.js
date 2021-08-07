import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet"

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, { name: "Luke", animal: "Dog", breed: "Auggie" }),
    React.createElement(Pet, {
      name: "Max",
      animal: "Rabbit",
      breed: "Belgian Hare Rabbit",
    }),
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Hamster",
      breed: "Darf White Russian Hamster",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
