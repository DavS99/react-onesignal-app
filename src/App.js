import { useEffect } from "react";
import useInitOneSignal from "./useOneSignal";
import OneSignal from "react-onesignal";

function App() {
  useInitOneSignal();

  return (
    <div className="App">
      <button>Trigger prompt</button>
    </div>
  );
}

export default App;
