import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/hoc/Movie";
import Counter from "./components/hooks/Counter";
import Users from "./components/hooks/Users";
import MoviePage from "./components/context/MoviePage";
import UserContext from "./components/context/userContext";
import { Component } from "react";
import Login from "./components/context/Login";
import CartContext from "./components/context/cartContext";
class App extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user:" + username);
    const user = { name: "Dan" };
    this.setState({ currentUser: user });
  };
  state = {
    currentUser: "null",
  };
  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div className="App">
            <MoviePage />
            <Login />
            {/* <Movie />
        <Counter />
        <Users /> */}
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
