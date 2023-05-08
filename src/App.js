import "./App.css";

import Weather from "./Weather.js";

function App() {
  return (
    <div className="App container-grey ">
      <Weather defaultCity="Vancouver" />

      <p>
        This app was coded by{" "}
        <a
          href="https://stephbrosky.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Steph Brosky
        </a>{" "}
        and is
        <a
          href="
          https://github.com/SBrosky/react-weather"
          rel="noreferrer"
          target="_blank"
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
