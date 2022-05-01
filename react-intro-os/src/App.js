import "./App.css";

function App() {
  const operateArr = ["android", "Blackberry", "iPhone", "Windows Phone"];
  const manufacArr = [
    { name: "Samsung", style: "square" },
    { name: "HTC", style: "square" },
    { name: "Micromax", style: "" },
    { name: "Apple", style: "circle" },
  ];
  return (
    <div className="App">
      <h2>Mobile operating System</h2>
      <ul>
        {operateArr.map((e) => {
          return <Operate ope={e} />;
        })}
      </ul>
      <h2>Mobile Manufactures</h2>
      <ul>
        {manufacArr.map((e) => {
          return <Manufac menu={e.name} style={e.style} />;
        })}
      </ul>
    </div>
  );
}
function Operate(props) {
  return <li>{props.ope}</li>;
}
function Manufac(props) {
  return <li className={props.style}>{props.menu}</li>;
}
export default App;
