const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [React.createElement("h1", {}, name), React.createElement("h2", {}, animal), React.createElement("h2", {}, breed)])
}

const App = () => {
  return React.createElement("div", {}, [React.createElement("h1", {}, "Adopt me!"), React.createElement(Pet, {name: "Luke", animal: "dog", breed: "Auggie"}), React.createElement(Pet, {name: "Max", animal: "Rabbit", breed: "Belgian Hare Rabbit"}), React.createElement(Pet, {name: "Charlie", animal: "Hamster", breed: "Darf White Russian Hamster"})])
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))