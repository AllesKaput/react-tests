import logo from "./logo.svg";
import "./App.css";

const user = {
  firstName: "Иван",
  lastName: "Иванов",
};

function formateUser(user) {
  return user.firstName + " " + user.lastName;
}

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return <div>Hello {formateUser(user)}</div>;
}

export default App;
