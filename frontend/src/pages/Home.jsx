import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch the message from the backend when the component mounts
    fetch("api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <p>Message from backend: {message}</p>
      <Link to="/">Go back Home</Link>
    </div>
  );
}

export default AboutPage;
