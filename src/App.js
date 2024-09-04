import useInitOneSignal from "./useOneSignal";
import OneSignal from "react-onesignal";

function App() {
  useInitOneSignal();
  const requestPermission = async () => {
    try {
      await OneSignal.Notifications.requestPermission();
      console.log("request permission on");
    } catch (error) {
      console.error("Failed to request permission:", error);
    }
  };

  return (
    <div className="App">
      <h2>Click</h2>
      <button onClick={requestPermission}>Trigger prompt</button>
      <div onClick={requestPermission}>div click</div>
      <hr />
    </div>
  );
}

export default App;
