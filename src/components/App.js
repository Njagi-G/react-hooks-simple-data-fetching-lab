import React, { useState, useEffect } from "react";

function App() {
  // Initialize the state for the image URL and the loading flag
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  // Use the useEffect hook to fetch a random dog image when the component mounts
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update the image state with the received image URL
        setImage(data.message);
        // Set the loading flag to false
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  // Render the component
  return (
    <div>
      {loading ? (
        // Conditional rendering to show the loading text only when the image is not yet loaded
        <p>Loading...</p>
      ) : (
        <img src={image} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
