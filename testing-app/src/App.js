import Async from "./components/Async/Async";
import CounterOne from "./components/Counter/CounterOne";
import CounterTwo from "./components/Counter/CounterTwo";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Posts />

      {/* <Async /> */}

      {/* <CounterOne />
      <CounterTwo /> */}
    </div>
  );
}

export default App;
