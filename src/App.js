import { useEffect } from 'react';
import useInitOneSignal from './useOneSignal';
import OneSignal from "react-onesignal";

function App() {
  useInitOneSignal();

  const triggerPrompt = async () => {
    console.log('kancgel')
    try {
      await OneSignal.Notifications.requestPermission();
    } catch (e) {
      console.log(e);
    }
  }

  
  useEffect(() => {
    triggerPrompt()
  }, [])

  return (
    <div className="App">
      <button>Trigger prompt</button>
    </div>
  );
}

export default App;