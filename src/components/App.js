// create your App component here
function App() {
  const [imageUrl, setImageUrl] = useState(null);

  // Fetch the dog image
  fetch("https://dog.ceo/api/breed/bulldog/english/images/random")
    .then((response) => response.json())
    .then((data) => {
      setImageUrl(data.message);
    })
    .catch((error) => {
      console.error("Error fetching dog image:", error);
    });

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;