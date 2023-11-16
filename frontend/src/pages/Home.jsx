import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch the message from the backend when the component mounts
    // Add name as a parameter to the post request
    fetch("api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <p>Message from backend: {message}</p>
      <Link to="/about">Go to About page</Link>
    </div>
  );
}

export default HomePage;
