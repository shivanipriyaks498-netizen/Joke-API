import { useEffect, useState } from "react";

export default function App() {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function getJoke() {
    setIsLoading(true);
    setError("");

    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart"
    )
    const data = await response.json();
    setJoke(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getJoke();
  }, [])

  return (
    <div>
      <h1>LaughLab</h1>
      <h3>Let me tell you a joke son....</h3>
      {isLoading && <p>Joke is loading son....</p>}
      {error && <p>There is some error son....</p>}
      {joke && !isLoading && 
      <div>
        <h2>{joke.setup}</h2>
        <h3>{joke.delivery}</h3>
      </div>
      }
      <button onClick={getJoke}>Get another joke</button>
    </div>
  )
}