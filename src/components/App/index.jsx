import { useState, useEffect } from "react";
import Dashboard from "../Dashboard";
import Login from "../Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("is_authenticated"));
    setIsAuthenticated(data);
  }, []);
  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;
