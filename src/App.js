import useInitOneSignal from "./useOneSignal";

function App() {
  useInitOneSignal();

  return (
    <div className="App">
      <h2>Click</h2>
      <button>Trigger prompt</button>
    </div>
  );
}

export default App;
