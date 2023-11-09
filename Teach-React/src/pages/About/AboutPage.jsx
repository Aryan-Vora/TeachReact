import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    // Fetch the message from your backend API
    fetch("/api/message")
      .then((response) => response.json())
      .then((data) => setBackendMessage(data.message))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setBackendMessage("Failed to load message from backend");
      });
  }, []); // The empty array means this effect runs once on mount

  return (
    <div>
      <h1>About Page</h1>
      <p>Message from backend: {backendMessage}</p>
      <Link to="/">Go back Home</Link>
    </div>
  );
}

export default AboutPage;
