import logo from "./logo.png";
import "./App.css";

function App() {
  const navArr = ["Services", "Projects", "About"];
  return (
    <div className="App">
      <nav className="nav">
        <div className="box1">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="box2">
          <ul>
            {navArr.map((e) => {
              return <NavMenu menu={e} />;
            })}
          </ul>
        </div>
        <div className="box3">
          <button>Contact</button>
        </div>
      </nav>
    </div>
  );
}
function NavMenu(props) {
  return <li>{props.menu}</li>;
}

export default App;
