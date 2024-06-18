import { useEffect, useState } from "react";
import axios from "axios";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Modal from "./Modal.jsx";
function App() {
  // const [count, setCount] = useState(0)
  const [jokes, setjokes] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data, "🤣");
        // console.log(response);
        setjokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleViewDetails = (joke) => {
    setSelectedPost(joke);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };
  return (
    <>
      <h1>
        Explore Jokes api
        <a
          href="https://jsonplaceholder.typicode.com/posts"
          target="_blank"
          rel="noreferrer"
          id="link"
        >
          Link
        </a>
        to acces jokes 😁
      </h1>
      <p>
        <span id="jokeLenght">Total jokes:</span> {jokes.length}
      </p>
      <div className="Jokes">
        {jokes.map((joke, index) => (
          <div key={joke.id} className="card">
            <h3>Title: {joke.title}</h3>
            <p>
              {" "}
              <strong>Content:</strong> {joke.body}
            </p>
            <button onClick={() => handleViewDetails(joke)} className="button">
              View Details
            </button>
          </div>
        ))}
        {selectedPost && (
          <Modal post={selectedPost} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
}

export default App;
