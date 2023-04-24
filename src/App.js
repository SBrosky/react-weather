import "./App.css";

import Weather from "./Weather.js";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App container-grey ">
      <Weather defaultCity="Vancouver" />
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
