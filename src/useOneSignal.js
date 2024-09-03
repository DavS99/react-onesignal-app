import { useEffect } from 'react';
import OneSignal from 'react-onesignal';

const useInitOneSignal = () => {
  useEffect(() => {
      OneSignal.init({
        appId: "b15fe36e-bbf9-452b-a738-2761ff21333d",
        apiKey: "Y2FlZjU2ZGYtM2I4Ni00YjYyLTliYzUtNWI2NGYyYzdhYWNm",
        allowLocalhostAsSecureOrigin: true
      }).then(() => {
        console.log('Init OneSignal!');
      });
  }, []);
};

export default useInitOneSignal;
