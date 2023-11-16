import { useState } from "react";
import { Link } from "react-router-dom";
function AboutPage() {
  const [input, setInput] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("api/echo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: input }),
      });
      const data = await response.json();
      setPostBody(data.userInput);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>About Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter some text"
        />
        <button type="submit">Submit</button>
      </form>
      {postBody && <p>Post request body: {postBody}</p>}
      <Link to="/">Go to Home page</Link>
    </div>
  );
}

export default AboutPage;
