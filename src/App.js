import useInitOneSignal from './useOneSignal';
import OneSignal from "react-onesignal";

function App() {
  useInitOneSignal();

  const triggerPrompt = async () => {
    try {
      await OneSignal.Notifications.requestPermission();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <button onClick={triggerPrompt}>Trigger prompt</button>
    </div>
  );
}

export default App;