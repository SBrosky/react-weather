import "./App.css";
import Search from "./Search.js";
import Location from "./Location.js";
import Current from "./Current.js";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App container-grey">
      <Search />
      <Location />
      <Current />
      <Forecast />
    </div>
  );
}

export default App;
