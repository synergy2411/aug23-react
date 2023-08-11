import ClassDemo from "./ClassDemo/ClassDemo";
import Todos from "./Todos/Todos";

function App() {
  return (
    <div className="App">
      <h1>App Renders!</h1>

      <ClassDemo initialValue={101} />

      <Todos />
    </div>
  );
}

export default App;
