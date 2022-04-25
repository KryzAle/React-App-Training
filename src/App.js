import React from "react";
import "./App.css";
import Menu from "./Menu";
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          rating: 5,
          title: "https://nicolgit.github.io/how-deploy-angular-app-to-azure-appservice-running-linux-from-github/",
          image: "https://books.google.com/books/content/images/frontcover/cHJvZmV0bzkC?fife=w200-h300",
        },
        {
          id: 2,
          rating: 4,
          title: "El señor de los anillos",
          image: "https://books.google.com/books/content/images/frontcover/cHJvZmV0bzkC?fife=w200-h300",
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <Menu title="Amozon" />
        <List items={this.state.books}/>
      </div>
    );
  }
}
export default App;
