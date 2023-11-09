import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

export default HomePage;
