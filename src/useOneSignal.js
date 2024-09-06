import { useEffect } from "react";
import OneSignal from "react-onesignal";

const useInitOneSignal = () => {
  useEffect(() => {
    OneSignal.init({
      appId: "66c2daed-9dfa-4c9b-9d2b-aba613424cef",
      apiKey: "ZTBhNTQ0ZjQtMmQ5MS00NTE5LTg4YjAtNDA1MzdiNzdhNmY2",
      allowLocalhostAsSecureOrigin: true,
    }).then(() => {
      console.log("init");
      Notification.requestPermission();
    });
  }, []);
};

export default useInitOneSignal;
