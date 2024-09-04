import { useEffect } from "react";
import OneSignal from "react-onesignal";

const useInitOneSignal = () => {
  useEffect(() => {
    OneSignal.init({
      appId: "66c2daed-9dfa-4c9b-9d2b-aba613424cef",
      apiKey: "ZTBhNTQ0ZjQtMmQ5MS00NTE5LTg4YjAtNDA1MzdiNzdhNmY2",
      allowLocalhostAsSecureOrigin: true,
    }).then(() => {
      const timer = setTimeout(() => {
        if (
          OneSignal &&
          OneSignal.Notifications &&
          OneSignal.Notifications.requestPermission
        ) {
          OneSignal.Notifications.requestPermission()
            .then((permission) => {
              console.log("Notification permission status:", permission);
            })
            .catch((error) => {
              console.error("Permission request failed:", error);
            });
        }
      }, 1000); // 1-second delay to ensure page load is complete

      return () => clearTimeout(timer);
    });
  }, []);
};

export default useInitOneSignal;
