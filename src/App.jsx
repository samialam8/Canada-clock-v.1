import ClockHeading from "./components/ClockHeading";
import ClockMotto from "./components/ClockMoto";
import CurrentTime from "./components/CurrentTime";

import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockMotto></ClockMotto>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
