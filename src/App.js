import { useState, useEffect } from "react";
import useInitOneSignal from "./useOneSignal";
import OneSignal from "react-onesignal";

// Styles (inline or replace with CSS classes)
const bannerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#ffcc00",
  padding: "10px",
  position: "fixed",
  top: "0",
  width: "100%",
  zIndex: 1000,
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
};

const textStyles = {
  margin: 0,
  fontSize: "16px",
};

const buttonStyles = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  cursor: "pointer",
  fontSize: "14px",
};

const closeButtonStyles = {
  backgroundColor: "transparent",
  color: "#000",
  border: "none",
  cursor: "pointer",
  fontSize: "20px",
  marginLeft: "10px",
};

function App() {
  const [notificationStatus, setNotificationStatus] = useState(
    Notification.permission
  );

  console.log(notificationStatus, "notificationStatus");

  const [showBanner, setShowBanner] = useState(false);

  useInitOneSignal();

  const handleCloseBanner = () => {
    setShowBanner(false); // Close the banner
  };

  return (
    <div className="App">
      <h2>Click</h2>
      {showBanner && notificationStatus === "default" && (
        <div style={bannerStyles}>
          <p style={textStyles}>
            We'd love to send you notifications for important updates and
            exclusive offers.
          </p>
          <button style={buttonStyles}>Allow Notifications</button>
          <button onClick={handleCloseBanner} style={closeButtonStyles}>
            X
          </button>
        </div>
      )}
      <hr />
    </div>
  );
}

export default App;
