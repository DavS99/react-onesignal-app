import { useEffect } from "react";
import OneSignal from "react-onesignal";

const useInitOneSignal = () => {
  useEffect(() => {
    const handleUserInteraction = () => {
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

      // Remove event listener after triggering the permission request
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };

    OneSignal.init({
      appId: "66c2daed-9dfa-4c9b-9d2b-aba613424cef",
      apiKey: "ZTBhNTQ0ZjQtMmQ5MS00NTE5LTg4YjAtNDA1MzdiNzdhNmY2",
      allowLocalhostAsSecureOrigin: true,
    }).then(() => {
      console.log("init");
      // Attach event listeners for click or scroll
      window.addEventListener("click", handleUserInteraction);
      window.addEventListener("scroll", handleUserInteraction);
      window.addEventListener("load", handleUserInteraction);
    });

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("load", handleUserInteraction);
    };
  }, []);
};

export default useInitOneSignal;
