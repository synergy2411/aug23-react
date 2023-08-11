import Async from "./components/Async/Async";
import CounterOne from "./components/Counter/CounterOne";
import CounterTwo from "./components/Counter/CounterTwo";
import Greet from "./components/Greet/Greet";
import Message from "./components/Message/Message";
import Posts from "./components/Posts/Posts";

function App() {
  let username = "Jenny Doe";

  return (
    <div className="App">
      <h1>Hello React</h1>

      <hr />
      <Greet
        title={<h1>The Greet Component</h1>}
        message={<Message username={username} />}
      >
        <p>Some cool content here...</p>
      </Greet>

      {/* <Posts /> */}

      {/* <Async /> */}

      {/* <CounterOne />
      <CounterTwo /> */}
    </div>
  );
}

export default App;
