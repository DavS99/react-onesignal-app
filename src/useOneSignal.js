import { useEffect } from "react";
import OneSignal from "react-onesignal";

const useInitOneSignal = () => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        await OneSignal.Notifications.requestPermission();
        console.log("request permission on");
      } catch (error) {
        console.error("Failed to request permission:", error);
      }
    };

    OneSignal.init({
      appId: "66c2daed-9dfa-4c9b-9d2b-aba613424cef",
      apiKey: "ZTBhNTQ0ZjQtMmQ5MS00NTE5LTg4YjAtNDA1MzdiNzdhNmY2",
      allowLocalhostAsSecureOrigin: true,
    }).then(() => {
      requestPermission();
      console.log("Init OneSignal!");
    });
  }, []);
};

export default useInitOneSignal;
