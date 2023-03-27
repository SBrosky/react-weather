import "./App.css";
import Search from "./Search.js";
import Location from "./Location.js";
import Current from "./Current.js";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App container-grey ">
      <Search />
      <Location />
      <Current />
      <Forecast />

      <p>
        This app was coded by Steph Brosky and is
        <a
          href="https://github.com/SBrosky/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-Source
        </a>
        .
      </p>
    </div>
  );
}

export default App;
